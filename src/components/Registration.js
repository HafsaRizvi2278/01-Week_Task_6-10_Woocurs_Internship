import React, { useState } from "react";
import { db } from "../firebase";  // Firebase Firestore instance
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await addDoc(collection(db, "users"), {
//         ...formData,
//         timestamp: serverTimestamp(),
//       });
//       alert("✅ Data saved!");
//       setFormData({ name: "", email: "", phone: "" }); // reset form
//     } catch (error) {
//       console.error("❌ Error adding document: ", error);
//     }
//   };




const handleSubmit = async (e) => {
  e.preventDefault();

  // Validation
  if (formData.name.length < 3) {
    alert("Name must be at least 3 characters");
    return;
  }
  if (!formData.email.includes("@")) {
    alert("Invalid email format");
    return;
  }
  if (formData.phone.length !== 10 || isNaN(formData.phone)) {
    alert("Phone must be 10 digits");
    return;
  }

  // Firestore submission
  try {
    await addDoc(collection(db, "users"), {
      ...formData,
      timestamp: serverTimestamp(), // for record creation time
    });
    alert("✅ Data saved!");
    setFormData({ name: "", email: "", phone: "" }); // reset form
  } catch (error) {
    console.error("❌ Error adding document: ", error);
    alert("Error submitting form. Check console.");
  }
};


  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Registration;

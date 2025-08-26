// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // ✅ add this
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD29IZzxeg0I2TMhnGSHYSBP1JD4ZGTg58",
  authDomain: "restaurant-menu-app-c489e.firebaseapp.com",
  projectId: "restaurant-menu-app-c489e",
  storageBucket: "restaurant-menu-app-c489e.firebasestorage.app",
  messagingSenderId: "520741638474",
  appId: "1:520741638474:web:35b844fe329b9e3702b1b3",
  measurementId: "G-6X1HETJ2VP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);

console.log("🔥 Firebase initialized:", app);

//export default app;



// ✅ Export both
export { app, db };
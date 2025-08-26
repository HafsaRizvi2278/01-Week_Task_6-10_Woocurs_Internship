import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from "firebase/firestore";

function UserList() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState("name");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const userData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setUsers(userData);
      } catch (error) {
        console.error("Error fetching users: ", error);
      }
    };
    fetchUsers();
  }, []);

  // Filtered users
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sorted users
  const sortedUsers = [...filteredUsers].sort((a, b) =>
    a[sortKey].toLowerCase() > b[sortKey].toLowerCase() ? 1 : -1
  );

  return (
    <div className="container mt-5">
      <h2>Registered Users</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name"
        className="form-control mb-3"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Table View (desktop) */}
      <table className="table table-bordered table-hover table-striped d-none d-md-table">
        <thead>
          <tr>
            <th onClick={() => setSortKey("name")} style={{ cursor: 'pointer' }}>Name</th>
            <th onClick={() => setSortKey("email")} style={{ cursor: 'pointer' }}>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Card View (mobile) */}
      {sortedUsers.map(user => (
        <div className="card mb-3 d-md-none" key={user.id}>
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <p className="card-text">Email: {user.email}</p>
            <p className="card-text">Phone: {user.phone}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserList;

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mt-5">
      <h1>Welcome to Restaurant Menu App</h1>
      <p>Order your favorite meals quickly and easily.</p>

      {/* Navigation Buttons */}
      <div className="d-flex flex-column gap-2 mt-4">
        <Link to="/registration" className="btn btn-primary">Register</Link>
        <Link to="/about" className="btn btn-secondary">About</Link>
        <Link to="/users" className="btn btn-success">View Registered Users</Link>
      </div>
    </div>
  );
}

export default Home;

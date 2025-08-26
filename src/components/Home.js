import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mt-5">
      <h1>Welcome to Restaurant Menu App</h1>
      <p>Order your favorite meals quickly and easily.</p>
      <Link to="/registration" className="btn btn-primary">Register</Link>
      <Link to="/about" className="btn btn-secondary">About</Link>
    </div>
  );
}
export default Home;

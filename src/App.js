import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { db } from "./firebase"; // Firebase config

// Import screens
import Home from "./components/Home";
import Registration from "./components/Registration";
import About from "./components/About";
import UserList from "./components/UserList.jsx"; // <-- import UserList

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<UserList />} /> {/* <-- add route */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

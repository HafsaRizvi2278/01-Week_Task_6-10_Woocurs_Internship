import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import app from "./firebase"; // Firebase config

// Import screens
import Home from "./components/Home";
import Registration from "./components/Registration";
import About from "./components/About";

function App() {
  // 🔥 Quick Firebase check in console
  console.log("Firebase App:", app);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

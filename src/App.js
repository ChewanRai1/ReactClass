import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Navbar from "./components/Navbar";
import React from "react";

// Toast config
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUpdate from "./pages/admin/AdminUpdate";

function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path = '/register' element = {<h1>Register page</h1>} />
        <Route path = '/login' element = {<h1>login page</h1>} /> */}
        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/update/:id" element={<AdminUpdate />} />
      </Routes>
    </Router>
  );
}

export default App;
//Task
// 1. Create a path for login page
//2. Make a UI
//3. Make a useState

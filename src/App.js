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
import AdminRoutes from "./pages/protected/AdminRoutes";
import UserRoutes from "./pages/protected/UserRoutes";
import Profile from "./pages/profile/Profile";

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

        {/* Profile - make a page and route */}
        <Route element={<UserRoutes />}>
          <Route path="/profile" element={<Profile />}></Route>
        </Route>

        {/* Admin Routes */}
        <Route element={<AdminRoutes />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/update/:id" element={<AdminUpdate />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
//Task
// 1. Create a path for login page
//2. Make a UI
//3. Make a useState


import './App.css';

import {BrowserRouter as Router,
Routes,
Route}from 'react-router-dom'
import Homepage from './homepage/Homepage';
import Login from './login/Login';
import Register from './register/Register';
import Navbar from './components/Navbar';
import React from 'react';

// Toast config
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <ToastContainer/>
      <Routes>
        <Route path = '/' element={<Homepage/>}/>
        <Route path = '/login' element={<Login/>}/>
        <Route path = '/register' element={<Register/>}/>
        {/* <Route path = '/register' element = {<h1>Register page</h1>} />
        <Route path = '/login' element = {<h1>login page</h1>} /> */}
      </Routes>
    </Router>

  );
}

export default App;
//Task
// 1. Create a path for login page
//2. Make a UI
//3. Make a useState
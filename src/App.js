
import './App.css';

import {BrowserRouter as Router,
Routes,
Route}from 'react-router-dom'
import Homepage from './homepage/Homepage';
import Login from './login/Login';
import Register from './register/Register';
import Navbar from './components/Navbar';
import React from 'react';

function App() {
  return (
    <Router>
      <Navbar/>
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

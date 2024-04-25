
import './App.css';

import {BrowserRouter as Router,
Routes,
Route}from 'react-router-dom'
import Homepage from './homepage/Homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = '/' element={<Homepage/>}/>
        <Route path = '/register' element = {<h1>Register page</h1>} />
        <Route path = '/login' element = {<h1>login page</h1>} />
      </Routes>
    </Router>

  );
}

export default App;

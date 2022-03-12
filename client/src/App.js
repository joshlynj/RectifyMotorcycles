import './App.css';
import React from 'react';
import {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
    <div>
    {/* Link to='/about'>Go to Aboutpage</Link> */}
      <Link to='/'>Home</Link>
      <Link to='/register'>Register</Link>
      <Link to='/login'>Login</Link>
      <Link to='/services'>Services</Link>
    </div>

      <Routes>
        <Route path='/' element={<home />} />
        <Route path='/register' element={<register />} />
        <Route path='/login' element={<login />} />
        <Route path='/services' element={<services />} />
      </Routes>
    </>

  );
}

export default App;

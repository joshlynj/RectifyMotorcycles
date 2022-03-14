//Style imports
import './App.css';
import './components/footer.css'

import React from 'react';
import {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

//Pages imports
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import Services from './pages/Services.js';
import Home from './pages/Home.js';
import About from './pages/About-Me.js';
import Build from './pages/My-Builds.js';


//Component imports
import Navbar from './components/Navbar.js';
import Footer from './components/footer';



function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={ <Login />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about-me' element={<About />} />
        <Route path='/my-builds' element={<Build />} />
      </Routes>
      <Footer />
    </>


  );
}

export default App;

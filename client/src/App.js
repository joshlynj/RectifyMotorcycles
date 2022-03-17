//Style imports
import './App.css';
import './components/footer.css'

import React from 'react';
// import {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';

//Pages imports
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import Services from './pages/Services.js';
import Home from './pages/Home.js';
import AboutMe from './pages/AboutMe.js';
import Build from './pages/My-Builds.js';
import OrderForm from './pages/OrderForm';
import OrderType1 from './pages/order_by_type/OrderType1.js';
import OrderType2 from './pages/order_by_type/OrderType2.js';
import OrderType3 from './pages/order_by_type/OrderType3.js';
import OrderType4 from './pages/order_by_type/OrderType4.js';
import OrderType5 from './pages/order_by_type/OrderType5.js';
import OrderCustom from './pages/order_by_type/OrderCustom.js';

//Component imports
import Navbar from './components/Navbar.js';
import Footer from './components/footer.js';



function App() {
  return (
  <>
    <main>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={ <Login />} />
          <Route path='/services' element={<Services />} />
          <Route path='/about-me' element={<AboutMe />} />
          <Route path='/my-builds' element={<Build />} />
          <Route path='/order-form/' element={<OrderForm />} />
          <Route path='/order-form/1' element={<OrderType1/>} />
          <Route path='/order-form/2' element={<OrderType2/>} />
          <Route path='/order-form/3' element={<OrderType3/>} />
          <Route path='/order-form/4' element={<OrderType4/>} />
          <Route path='/order-form/5' element={<OrderType5/>} />
          <Route path='/order-form/6' element={<OrderCustom/>} />
        </Routes>
        <Footer />
      </main>
    </>


  );
}

export default App;

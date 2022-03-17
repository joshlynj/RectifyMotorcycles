import React from 'react';
// import { useContext } from 'react';
import Register from './Register.js';
import { Link, useNavigate } from 'react-router-dom';
import './pages.css';
import Services from './Services';



function sendLogin(e){
    
   let username = e.target.form[0].value;
   let password = e.target.form[1].value;
   console.log('username', username)
   console.log('password', password)

   
   fetch(`http://localthost:8080/users`, {
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
       },
        method: "POST",
        body: JSON.stringify({
          username: username,
          password: password
       
        })
    })
    .then((res) => res.json())
    .then(data => console.log(data))
    .catch((err) => console.log(err))
   


};

export default function Login() {
    
    return (
        <div className="forms">
            <h1>Please Login</h1>
            <form>
                <p>
                    <label>username:</label>
                    <input for="username" type="text" />
                </p>
                <p>
                    <label>password:</label>
                    <input for="username" type="password" />
                </p>
                <Link to="/services" element={<Services />}>
                <button onClick={e => sendLogin(e)} type="submit">Login</button>
                </Link>
            </form>
            

            <h2>Don't have an account?</h2>
            <form>
                <Link to="/register" element={<Register />}>
                    <button type="button">Register Here</button>
                </Link>
            </form>
        </div>
    )

};
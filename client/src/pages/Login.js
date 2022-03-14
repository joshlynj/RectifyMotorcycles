import React from 'react';
// import { useContext } from 'react';
import Register from './Register.js';
import { Link } from 'react-router-dom';
import './forms.css';

export default function Login (){
    return(
    <div className="forms">
        <h1>Please Login</h1>
            <form>
                <p>
                    <label>username:</label>
                    <input for="username" type="text"/>
                </p>
                <p>
                    <label>password:</label>
                    <input for="username" type="text"/>
                </p>
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
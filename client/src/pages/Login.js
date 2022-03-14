import React from 'react';
// import { useContext } from 'react';
import Register from './Register.js';


export default function Login (){
    return(
    <>
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
                <p>
                    <button onClick={() => Register}>Register Here</button>
                </p>
            </form>
    </>
    )

};
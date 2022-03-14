import React from 'react';
import { useContext } from 'react';


export default function Register (){
    return(
    <>
        <h1>Register Your Account</h1>
            <form>
                <p>
                    <label>Username:</label>
                    <input for="username" type="text"/>
                </p>
                <p>
                    <label>Password:</label>
                    <input for="password" type="text"/>
                </p>
                <p>
                    <label>First Name:</label>
                    <input for="firstName" type="text"/>
                </p>
                <p>
                    <label>Last Name:</label>
                    <input for="lastName" type="text"/>
                </p>
                <p>
                    <label>E-mail:</label>
                    <input for="email" type="text"/>
                </p>
                <p>
                    <label>Address:</label>
                    <input for="address" type="text"/>
                </p>
                <p>
                    <label>Phone Number:</label>
                    <input for="phoneNumber" type="text"/>
                </p>
            </form>
    </> 
    ) 

};
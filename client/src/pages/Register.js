import React from 'react';
// import { useContext } from 'react';
import './pages.css';
import { useState } from 'react';


export default function Register (){
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [first_name, setFirst_name] = useState("")
    const [last_name, setLast_name] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [phone_number, setPhone_number] = useState("")


    let handleSubmit = (e) => {

        
        e.preventDefault();
            //might need to change the link for fetch
          fetch('http://localhost:8080/users', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             },
            method: "POST",
            body: JSON.stringify({
              username: username,
              password: password,
              first_name: first_name,
              last_name: last_name,
              email: email,
              address: address,
              phone_number: phone_number
            }),
          })
          .then((res) => res.json())
          .catch((err) => console.log('error from fetch'))
        }
    return(
    <div className="forms">
        <h1>Register Your Account</h1>
            <form className='register-form' onSubmit={handleSubmit}>
                <p>
                    <label for="username">Username:</label>
                    <input type="text"
                    onChange={(e) => setUsername((e.target.value))}/>
                </p>
                <p>
                    <label for="password">Password:</label>
                    <input type="text"
                    onChange={(e) => setPassword((e.target.value))}/>
                </p>
                <p>
                    <label for="firstName">First Name:</label>
                    <input type="text"
                    onChange={(e) => setFirst_name((e.target.value))}/>
                </p>
                <p>
                    <label>Last Name:</label>
                    <input for="lastName" type="text"
                    onChange={(e) => setLast_name((e.target.value))}/>
                </p>
                <p>
                    <label for="email">E-mail:</label>
                    <input for="email" type="text"
                    onChange={(e) => setEmail((e.target.value))}/>
                </p>
                <p>
                    <label for="address">Address:</label>
                    <input type="text"
                    onChange={(e) => setAddress((e.target.value))}/>
                </p>
                <p>
                    <label for="phoneNumber">Phone Number:</label>
                    <input  type="text"
                    onChange={(e) => setPhone_number((e.target.value))}/>
                </p>

                <button type="submit">Create Account</button>
            </form>
    </div> 
    ) 

};
import React from "react"
import '../pages.css';
import { useState } from 'react';

export default function OrderType3 () {

    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState("");
    const [message, setMessage] = useState("");
    
    let handleSubmit = (e) => {
        e.preventDefault();
          fetch('http://localhost:8080/orders', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             },
            method: "POST",
            body: JSON.stringify({
              service_id: 3,
              completion_status: false,
              part: "Cylinders/Heads",
              make: make,
              model: model,
              year: year,
              message: message
            }),
          })
          .then((res) => res.json())
          .catch((err) => console.log(err))
        }
    
    return (
      
    <div className="forms">
        <form className='order-form'>
        <h3>Requested Service: Cylinders/Heads Vapor Blasting</h3>  
        <p>
                    <label for="make">Make:</label>
                    <input id="make" name="make" type="text"
                    onChange={(e) => setMake(e.target.value)}/>
                </p>
                <p>
                    <label for="model">Model:</label>
                    <input id="model" name="model" type="text"
                    onChange={(e) => setModel(e.target.value)}/>
                </p>
                <p>
                    <label for="year">Year:</label>
                    <input id="year" name = "model" type="text"
                    onChange={(e) => setYear(e.target.value)}/>
                </p>

        <p>
            <h3>Cost: $75</h3>
        </p>

        <button type="submit" className = "submitBtn"> Submit Order </button>
        </form> 
    </div>
    )}
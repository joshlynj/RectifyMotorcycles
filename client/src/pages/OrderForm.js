import React from 'react';
import { useState } from 'react';
import Register from './Register.js';
import { Link } from 'react-router-dom';
import './pages.css';



export default function Order (){

    const [service, setService] = useState("");
    const [part, setPart] = useState("");
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState("");
    const [message, setMessage] = useState("");


    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            //might need to change the link for fetch
          let res = await fetch("https://localhost:8080", {
            method: "POST",
            body: JSON.stringify({
              service: service,
              part: part,
              make: make,
              model: model,
              year: year,
              message: message
            }),
          });
          let resJson = await res.json();
          if (res.status === 201) {
            setService("");
            setPart("");
            setMake("");
            setModel("");
            setYear("");
            setMessage("Order submitted successfully");
          } else {
            setMessage("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
      };


    return(
    <div className="forms">
        <h1>Place Your Order Here</h1>
            <form className='order-form' onSubmit={handleSubmit}>
                <p>
                <label for="service">Service:</label>
                <select id="service" name="service">
                    <option value = "1"> Carburetor Vapor Blasting</option>
                    <option value = "2"> Engine Case Vapor Blasting</option>
                    <option value = "3"> Cylinders/Heads Vapor Blasting</option>
                    <option value = "4"> Valve Cover Vapor Blasting</option>
                    <option value = "5"> Crankcase Vapor Blasting</option>
                    <option value = "6"> Custom Work</option>
                </select>
                </p>
                
                <p>
                    <label for="part">Part:</label>
                    <input id="part" name="part" type="text"/>
                </p>
                <p>
                    <label for="make">Make:</label>
                    <input id="make" name="make" type="text"/>
                </p>
                <p>
                    <label for="model">Model:</label>
                    <input id="model" name="model" type="text"/>
                </p>
                <p>
                    <label for="year">Year:</label>
                    <input id="year" name = "model" type="text"/>
                </p>
                <p>
                    <label for="cost">Total Cost:</label>
                    <input id="cost" name = "cost" type="text"/>
                </p>

                <button type="submit">Submit Form</button>

                <div className="message">{message ? <p>{message}</p> : null}</div>

            </form>
    </div>
    )
};
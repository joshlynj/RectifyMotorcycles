import React from 'react';
import { useState } from 'react';
import './pages.css';



export default function Order (){

    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState("");
    const [message, setMessage] = useState("");


    let handleSubmit = (e) => {
      e.preventDefault();
          //might need to change the link for fetch
        fetch('http://localhost:8080/orders', {
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           },
          method: "POST",
          body: JSON.stringify({
            service_id: 1,
            completion_status: false,
            part: "Carburetor",
            make: make,
            model: model,
            year: year,
            message: message
          }),
        })
        .then((res) => res.json())
        .catch((err) => console.log(err))
      }


    return(
    <div className="forms">
        <h1>Place Your Order Here</h1>
            <form className='order-form' onSubmit={handleSubmit}>
                <h3>Requested Service: Carburetor Vapor Blasting</h3>
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

                <h3>Cost: $70</h3>

                <button type="submit">Submit Order</button>

                <div className="message">{message ? <p>{message}</p> : null}</div>

            </form>
    </div>
    )
};
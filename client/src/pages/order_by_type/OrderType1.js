import React from "react"
import '../pages.css';

export default function OrderType1 () {
    
    return (
    <div className="forms">    
        <form className='order-form'>
        <h3>Requested Service: Carburetor Vapor Blasting</h3>
                    
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
            <h3>Cost: $70</h3>
        </p>

        <button type="submit">Submit Form
        
        </button>
        </form> 

    </div>
    )}
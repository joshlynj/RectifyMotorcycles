import React from 'react';
import { useContext } from 'react';
import './services.css';



// Need to pull service info from database
export default function Register (){
    return(
    <>
        <h1> Services We Offer </h1>
            <div className='services_container'>
                <div className='service_item'>
                    <h2> Carburetor Vapor Blasting </h2>
                    <img src="https://images.squarespace-cdn.com/content/v1/5c816848a09a7e2051739c39/1558378270345-DWA4FVF6JDQ71M3KWLZO/Vapor+Blasting+Carb.JPG?format=500w" alt="Carburetor Vapor Blasting"></img>
                    <h3> Cost:</h3>
                    <button>Add Service</button>
                </div>
                <div className='service_item'>
                    <h2> Engine Case Vapor Blasting </h2>
                    <img src="https://carpyscaferacers.com/wp-content/uploads/2014/02/vapor5.jpg" alt="Engine Case Vapor Blasting"></img>
                    <h3> Cost:</h3>
                    <button>Add Service</button>
                </div>

                <div className='service_item'>
                    <h2> Cylinders/Heads Vapor Blasting </h2>
                    <img src="https://i.ebayimg.com/images/g/WloAAOSwJUdeXYMp/s-l640.jpg" alt="Cylinders/Heads Vapor Blasting "></img>
                    <h3> Cost:</h3>
                    <button>Add Service</button>
                </div>

                <div className='service_item'>
                    <h2> Valve Cover Vapor Blasting </h2>
                    <img src="https://cdn.thumpertalk.com/uploads/imageproxy/i-XjJHkc8-L.jpg.1e03f40e4325a014f4899b7664739e15.jpg" alt="Valve Cover Vapor Blasting "></img>
                    <h3> Cost:</h3>
                    <button>Add Service</button>
                </div>

                <div className='service_item'>
                    <h2> Crankcase Vapor Blasting </h2>
                    <img src="http://forums.pelicanparts.com/uploads26/B97B8566_044D_4DA8_9BA1_AB16F2FEDE371519580731.jpg" alt="Crankcase Vapor Blasting "></img>
                    <h3> Cost:</h3>
                    <button>Add Service</button>
                </div>

                <div className='service_item'>
                    <h2> Custom Work </h2>
                    <button>Add Service</button>
                </div>
            </div>
    </> 
    ) 

};
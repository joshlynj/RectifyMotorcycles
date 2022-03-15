import React from 'react';
import { useEffect } from 'react';
import './pages.css';

// function fetchAllServices() {
//     fetch(`${url}${word}`)
//       .then((res) => res.json())
//       .then(setWordData)
//       .catch((err) => console.error(err));
//   }

useEffect(function(){
    
    fetch("http://localhost:8080/services")
    .then(response => response.json())
    .then((x) => displayServices(x))
    .catch((err) => console.error(err))
},[]);

// function displayServices(test){
//     console.log(test)
// }

//FUNCTION MAPS THROUGH EACH COLUMN AND DISPLAYS DATA (FORMATTED IN OUR RETURN)
// function displayServices() => {
//     for(i=0; i< service.id.length; i++){    
//         map.
//     }
// return (
//     <>
//     <service.name[]>
//     <services.cost[]>
//     <>
// )
// }

function fetchServicePrice(service){
    fetch(`../api${service}`)
        .then((res) => res.json())
        .then(console.log(res))
        .catch((err) => console.error(err));
}



function fetchServices(service) {
    console.log('fetching')
}

// Need to pull service info from database
export default function Register (){
    return(
    <div className='services-page'>
        <h1> Services We Offer </h1>
            <div className='services-container'>
                <div className='service-item'>
                    <h2> Carburetor Vapor Blasting </h2>
                    <img src="https://images.squarespace-cdn.com/content/v1/5c816848a09a7e2051739c39/1558378270345-DWA4FVF6JDQ71M3KWLZO/Vapor+Blasting+Carb.JPG?format=500w" alt="Carburetor Vapor Blasting"></img>
                    <h3> Cost: {fetchServicePrice("Carburetor Vapor Blasting")}</h3>
                    <button type="button" onClick={() => {fetchServices('carburetor')}}>Add Service</button>
                </div>
                <div className='service-item'>
                    <h2> Engine Case Vapor Blasting </h2>
                    <img src="https://carpyscaferacers.com/wp-content/uploads/2014/02/vapor5.jpg" alt="Engine Case Vapor Blasting"></img>
                    <h3> Cost:</h3>
                    <button>Add Service</button>
                </div>

                <div className='service-item'>
                    <h2> Cylinders/Heads Vapor Blasting </h2>
                    <img src="https://i.ebayimg.com/images/g/WloAAOSwJUdeXYMp/s-l640.jpg" alt="Cylinders/Heads Vapor Blasting "></img>
                    <h3> Cost:</h3>
                    <button>Add Service</button>
                </div>

                <div className='service-item'>
                    <h2> Valve Cover Vapor Blasting </h2>
                    <img src="https://cdn.thumpertalk.com/uploads/imageproxy/i-XjJHkc8-L.jpg.1e03f40e4325a014f4899b7664739e15.jpg" alt="Valve Cover Vapor Blasting "></img>
                    <h3> Cost:</h3>
                    <button>Add Service</button>
                </div>

                <div className='service-item'>
                    <h2> Crankcase Vapor Blasting </h2>
                    <img src="http://forums.pelicanparts.com/uploads26/B97B8566_044D_4DA8_9BA1_AB16F2FEDE371519580731.jpg" alt="Crankcase Vapor Blasting "></img>
                    <h3> Cost:</h3>
                    <button>Add Service</button>
                </div>

                <div className='service-item'>
                    <h2> Custom Work </h2>
                    <img src = "http://placekitten.com/300/300"/>
                    <h3>Click for Pricing</h3>
                    <button>Add Service</button>
                </div>
            </div>
    </div> 
    ) 

};



{/* <form action ='#'>
                    <label for="lang">Language</label>
                        <select name="languages" id="lang">
                            <option value="javascript">JavaScript</option>
                            <option value="php">PHP</option>
                            <option value="java">Java</option>
                            <option value="golang">Golang</option>
                            <option value="python">Python</option>
                            <option value="c#">C#</option>
                            <option value="C++">C++</option>
                            <option value="erlang">Erlang</option>
                        </select>
                        <input type="submit" value="Submit" />
                    </form> */}
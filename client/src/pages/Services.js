import React, { useState, useEffect } from 'react';
import './pages.css';
import { Link } from 'react-router-dom';
import OrderForm from './OrderForm.js'
import OrderType1 from './order_by_type/OrderType1.js';
import OrderType2 from './order_by_type/OrderType2.js';
import OrderType3 from './order_by_type/OrderType3.js';
import OrderType4 from './order_by_type/OrderType4.js';
import OrderType5 from './order_by_type/OrderType5.js';
import OrderCustom from './order_by_type/OrderCustom.js';

// function fetchAllServices() {
//     fetch(`${url}${word}`)
//       .then((res) => res.json())
//       .then(setWordData)
//       .catch((err) => console.error(err));
//   }

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

export default function Register (){

    let [services, setServices] = useState([
        {service: 'Carburetor Vapor Blasting', cost: 70, image: 'https://images.squarespace-cdn.com/content/v1/5c816848a09a7e2051739c39/1558378270345-DWA4FVF6JDQ71M3KWLZO/Vapor+Blasting+Carb.JPG?format=500w'},
        {service: 'Engine Case Vapor Blasting', cost: 20, image: 'https://carpyscaferacers.com/wp-content/uploads/2014/02/vapor5.jpg'},
        {service: 'Cylinders/Heads Vapor Blasting', cost: 75, image: 'https://i.ebayimg.com/images/g/WloAAOSwJUdeXYMp/s-l640.jpg'},
        {service: 'Valve Cover Vapor Blasting', cost: 60, image: 'https://cdn.thumpertalk.com/uploads/imageproxy/i-XjJHkc8-L.jpg.1e03f40e4325a014f4899b7664739e15.jpg'},
        {service: 'Crankcase Vapor Blasting', cost: 125, image: 'http://forums.pelicanparts.com/uploads26/B97B8566_044D_4DA8_9BA1_AB16F2FEDE371519580731.jpg'},
        {service: 'Custom Work', cost: null, image:'https://www.aerospecialties.com/app/uploads/2017/05/RBI9900TM-and-RBA2-isolated_01.jpg'}
      ])

      let[totalCost, setTotalCost] = useState([]);


    // useEffect(function(){
    //     fetch("http://localhost:8080/services")
    //     .then(response => response.json())
    //     .then((data) => setServices(data))
    //     .catch((err) => console.error(err))
    // },[]);

    console.log(services)

    // function fetchServicePrice(service){
    //     fetch(`http://localhost:8080/services/${service}`)
    //         .then((res) => res.json())
    //         .then(console.log(res))
    //         .catch((err) => console.error(err));
    // }
  ;
// const totalCost = [];
    return(
        
        // {(services[0] !== undefined) ? <ServiceContent mapData={shortArray} /> : <Grid item xs={12}> <LinearProgress color="secondary" /> </Grid>}
    <div className='services-page'>
        <h1> Services We Offer </h1>
            <div className='services-container'>
                <div className='service-item'>
                    <h2> {services[0].service}</h2>
                    <img src={services[0].image} alt="Carburetor Vapor Blasting"></img>
                     <h3>Cost: ${services[0].cost}</h3>
                     <Link to="/order-form/" element={<OrderForm />}>
                        <button type="button">Request Service</button>
                    </Link> 
                 </div>
                <div className='service-item'>
                     {/* <h2> { () => (services[1].name !== undefined) ? services[1].name : services } </h2>  */}
                     <h2> {(services[1].service)} </h2>
                    <img src={services[1].image}  alt="Engine Case Vapor Blasting"></img>
                    {/* {let cost1 = services[1].cost} */}
                    <h3> Cost: ${services[1].cost}</h3>
                    <Link to="/order-form/2" element={<OrderType2 />}>
                        <button type="button" >Request Service</button>
                    </Link> 
                </div>

                <div className='service-item'>
                    <h2> {services[2].service} </h2>
                    <img src={services[2].image}  alt="Cylinders/Heads Vapor Blasting "></img>
                    <h3> Cost: ${services[2].cost}</h3>
                    <Link to="/order-form/3" element={<OrderType3 />}>    
                        <button type="button" >Request Service</button>
                    </Link> 
                </div>

                <div className='service-item'>
                    <h2> {services[3].service} </h2>
                    <img src={services[3].image}  alt="Valve Cover Vapor Blasting "></img>
                    <h3> Cost: ${services[3].cost}</h3>
                    <Link to="/order-form/4" element={<OrderType4 />}>
                        <button type="button" >Request Service</button>
                    </Link> 
                </div>

                <div className='service-item'>
                    <h2> {services[4].service} </h2>
                    <img src={services[4].image}  alt="Crankcase Vapor Blasting "></img>
                    <h3> Cost: ${services[4].cost}</h3>
                    <Link to="/order-form/5" element={<OrderType5 />}>
                        <button type="button" >Request Service</button>
                    </Link> 
                </div>

                <div className='service-item'>
                    <h2> {services[5].service} </h2>
                    <img src = {services[5].image} alt="Custom Work"/>
                    <h3>Ask for Pricing</h3>
                    <Link to="/order-form/6" element={<OrderCustom />}>
                        <button type="button" >Request Service</button>
                    </Link> 
                </div>
            
            </div> 

            {/* <Link to="/order-form" element={<Order />}>
                    <button type="button">Complete Order</button>
                </Link> */}
    </div>
    )

};

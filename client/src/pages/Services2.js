import React, { useState, useEffect } from 'react';
import './pages.css';
// import ServiceContent from './ServiceContent';

export default function Register (){

    let [services, setServices] = useState()

    useEffect(function(){
        fetch("http://localhost:8080/services")
        .then(response => response.json())
        .then((data) => setServices(data))
        .catch((err) => console.error(err))
    },[]);

    function displayServicesByID() {
        for(let i=0; i< services.id.length; i++){
        let currentService = services[i];
        const imgArray = ["https://images.squarespace-cdn.com/content/v1/5c816848a09a7e2051739c39/1558378270345-DWA4FVF6JDQ71M3KWLZO/Vapor+Blasting+Carb.JPG?format=500w",
        "https://carpyscaferacers.com/wp-content/uploads/2014/02/vapor5.jpg", "https://i.ebayimg.com/images/g/WloAAOSwJUdeXYMp/s-l640.jpg",
        "https://cdn.thumpertalk.com/uploads/imageproxy/i-XjJHkc8-L.jpg.1e03f40e4325a014f4899b7664739e15.jpg", "http://forums.pelicanparts.com/uploads26/B97B8566_044D_4DA8_9BA1_AB16F2FEDE371519580731.jpg",
        "http://placekitten.com/300/300"]
        <ServiceContent service={services[i].name}, cost= {services[i].cost}, src={imgArray[i]}, alt={services[i].name}/>
        }
        return (
        <div className='service-item'>
            <h2> {services[i].name} </h2>
            <img src={imgArray[i]} alt={services[i].name}></img>
            <h3> Cost: {services[i].cost} </h3>
            <a href="http://localhost:3000/order-form">
                <button>Add Service</button>
            </a>
        </div>
        )
        };
    };


    // {(services[0] !== undefined) ? <ServiceContent mapData={shortArray} /> : <Grid item xs={12}> <LinearProgress color="secondary" /> </Grid>}
    
    // return (
    //     <ServiceContent />
        
    //     function ServicesMap ({mapData}){
    // return (
    //     mapData.map((item) =>{
    //         <ServiceContent service={services.service} cost={services.cost} />
    //     }
    // )    

    // )}
    


        // function displayServicesByID() {
        //     for(i=0; i< service.id.length; i++){
        //     let currentService = service[i]
        //     set`${i}`Price()

        //     }
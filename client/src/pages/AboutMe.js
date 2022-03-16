import React from 'react';
import jeff from './images/jeff.jpeg';
import jeff2 from './images/jeff2.jpeg'
import './pages.css';


export default function AboutMe (){
    return(
        <div className='about-me'>
                <div className='owner'>
                    <img src = {jeff} alt = 'Jeff Homan, Founder'/>
                    <h2>Jeff Homan</h2>
                    <p>Founder of Rectify Motoworks</p>
                </div>
                <div className ='description'>
                    <p>
                        Restoring, wrenching, and customizing motorcycles has been an obsessive hobby of mine for ten years.
                        Vapor blasting has taken my projects to the next level.
                        Cutting down on extensive hours of polishing and finishing while providing superior results.
                        This is a service I believe all types of projects would benefit from.
                    </p>
                    <img src = {jeff2} alt = 'Jeff2'/>
                </div>
        </div>
    )
};
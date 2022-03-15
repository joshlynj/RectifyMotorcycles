import React from 'react';
import jeff from './images/jeff.jpeg';
import jeff2 from './images/jeff2.jpeg'
import './pages.css';


export default function AboutMe (){
    return(
        <div className='about-me'>
            {/* <h1>About me:</h1>     */}
            <img src = {jeff}/>
            <div id='about'>
                <p>
                Restoring, wrenching, and customizing motorcycles has been an obsessive hobby of mine for ten years.
                        Vapor blasting has taken my projects to the next level.
                        Cutting down on extensive hours of polishing and finishing while providing superior results.
                        This is a service I believe all types of projects would benefit from.
                </p>
                <p>
                    <b>Jeff Homan</b> <br/>
                    Founder of Rectify Motoworks
                </p>
                
             </div>
             {/* <img src = {jeff2} width = '900' height = '1000'/> */}
        </div>
    )
};
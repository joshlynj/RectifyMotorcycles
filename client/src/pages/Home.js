import React from 'react';
import './pages.css';

//Components Import
import DetailedCard from '../components/DetailedCard.js';
import '../components/button.css';

//Pages Import
import AboutMe from './AboutMe.js';

export default function Home (){
    return(
        <div className = 'overall-home'>
            <div className='home-page'>
                <img src ="https://cdn.vox-cdn.com/thumbor/EEi-oM8bN6jQ0TOAfGPGPJI4SlY=/0x0:5184x3456/1820x1213/filters:focal(2178x1314:3006x2142):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70264689/AZ4I5423.0.jpg" alt = "motorcycle" />
            </div>
            <div class = 'text-on-background'>
                <h3> Beautiful Finishes </h3>
            </div>
        </div>
    )
};
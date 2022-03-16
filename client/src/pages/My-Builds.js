import React from 'react';
import CBBefore1500 from './images/CBBefore1500.jpg';
import CBAfter1500 from './images/CBAfter1500.jpg';
import GSAfter1500 from './images/GSAfter1500.jpg';
import GSBefore1500 from './images/GSBefore1500.jpg';


export default function Build (){
    return(
        <div className='builds'>
            <div className='before-and-after-container'>
                <div className='before-and-after-img'>
                    <img src = {CBBefore1500} alt = 'motorcycle'/>
                    <img src = {CBAfter1500} alt = 'motorcycle'/>
                </div>
                <h2>Honda CB750F</h2>
                <p>This is a fully restored 1977 Honda CB750F.</p>
            </div>
            <div className='before-and-after-container'>
                <div className='before-and-after-img'>
                    <img src = {GSBefore1500} alt = 'motorcycle'/>
                    <img src = {GSAfter1500} alt = 'motorcycle'/>
                </div>
                <h2>Suzuki GS750</h2>
                <p>This is a fully restored Suzuki GS750. </p>
            </div>
        </div>
    )
};
import React from 'react';
import CBBefore from './images/CBBefore.jpeg';
import CBAfter from './images/CBAfter.jpeg';
import GSAfter from './images/GSAfter.jpeg';
import GSBefore from './images/GSBefore.jpeg';


export default function Build (){
    return(
        <div className='builds'>
            <img src = {CBBefore} alt = 'motorcycle'/>
            <img src = {CBAfter} alt = 'motorcycle'/>
            <img src = {GSBefore} alt = 'motorcycle'/>
            <img src = {GSAfter} alt = 'motorcycle'/>
        </div>
    )
};
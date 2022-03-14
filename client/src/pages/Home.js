import React from 'react';
import '../components/button.css';
import { Link } from 'react-router-dom';
import DetailedCard from '../components/DetailedCard.js';
import CardTiles from '../components/CardTiles.js'
import AboutUs from '../components/AboutUs.js'

export default function Home (){
    return(
        <>
        <DetailedCard />
        <AboutUs />
        <CardTiles />
        </>
    )
};
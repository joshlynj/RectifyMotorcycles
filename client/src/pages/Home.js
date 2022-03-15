import React from 'react';
// import { Link } from 'react-router-dom';

//Components Import
import DetailedCard from '../components/DetailedCard.js';
import CardTiles from '../components/CardTiles.js';
import '../components/button.css';

//Pages Import
import AboutMe from './AboutMe.js';

export default function Home (){
    return(
        <>
        <DetailedCard />
        <CardTiles />
        </>
    )
};
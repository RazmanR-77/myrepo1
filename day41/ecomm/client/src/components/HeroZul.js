import React from 'react'
import '../App.css'
// import { Button } from './ButtonZul'
// temp
import './HeroZul.css'

function HeroSection(){
  return (
    <div className='hero-container'>
        <video src='/videos/Hero1.mp4' autoPlay loop muted />
        <h1>ENJOY MORE SAVINGS TODAY</h1>
        <p>FREE SHIPPING </p>
    </div>
  );
}

 export default HeroSection;
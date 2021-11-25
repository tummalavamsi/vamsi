import React from 'react';
import '../App.css'
import { Button } from './Button';
import { Button2 } from './Button2';
import Carditem from './Carditem';
import './HeroSection.css';
import { Link } from 'react-router-dom'

 function HeroSection() {
   const headingStyle={
     color:'red'
   }
   const headingStyle2={
    color:'blue'
  }
  return (
    <div className='hero-container'>
      <video src='videos/\production ID_4980005.mp4' autoPlay loop muted/>
      <h1 >Vedini<i style={headingStyle} class="fas fa-cannabis"></i></h1>
      <p style={headingStyle2}>What are you waiting for?</p>
     
      <div className='hero-btns'>
        
          <Button2 className='btns' buttonStyle='btn--primary'
          buttonSize='btn--large'
          >
            
              Get Started
            
          </Button2>
       
          
         
      </div>
     
    </div>
  );
}
export default HeroSection;
import React from 'react';
import '../App.css'
import { Button } from './Button';
import Carditem from './Carditem';
import Cards from './Cards';
import './Cards.css';
import './Getstarted.css';

 function A3() {
  return (
    <div className='hero-container'>
      <video src="videos/video1.1.mp4" autoPlay loop muted/>
     <div>
     
            <div className='cards__container'>
                <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <Carditem
                    src='\images\metal.jfif'
                    text='Metal'
                    label=''
                    desc='Birth years: Last number of your birth is 0 or 1
                    Associated with: “solidity and willpower" '
                    btntext='View More'
                    path='./B1'
                    className='card1'
                    />
                    <Carditem
                    src='\images\water.jpg'
                    text='Water'
                    label=''
                    desc=' Birth years: Last number of your birth is 2 or 3
                    Associated with: “responsiveness and persuasion”'
                    btntext='View More'
                    path='./M2'
                    className='card2'
                    /></ul>
                   <ul className='cards__items'>
                    <Carditem
                    src='\images\wood.jfif'
                    text='Wood'
                    label=''
                    desc='Birth years: Last number of your birth is 4 or 5
                    Associated with: “imagination and creativity”'
                    btntext='View More'
                    path='/B2'
                    className='card1'
                    />
                     <Carditem
                    src='\images\fire.jfif'
                    text='Fire'
                    label=''
                    desc='Birth years: Last number of your birth is 6 or 7
                    Associated with: “passion, and bursts of dynamic energy”'
                    btntext='View More'
                    path='/M1'
                    className='card2'
                    />

                     </ul>
                </div>
           
            </div>
            
     </div>
      
    </div>
  );
}
export default A3;
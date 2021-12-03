import React from 'react';
import '../App.css'
import { Button } from './Button';
import Carditem from './Carditem';
import Cards from './Cards';
import './Cards.css';
import './Getstarted.css';

 function A2() {
  return (
    <div className='hero-container'>
      <video src="videos/video1.1.mp4" autoPlay loop muted/>
     <div>
     
            <div className='cards__container'>
                <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <Carditem
                    src='\images\south.png'
                    text='South indian'
                    label=''
                    desc='It is basically a depiction of the zodiac exactly as it is laid out. Each of these 12 boxes is the representation of a Rashi of 30 degrees  '
                    btntext='View More'
                    className='card1'
                    />
                    <Carditem
                    src='\images\north.png'
                    text='North indian'
                    label=''
                    desc=' diamond chart format is more of an astrological perspective than an astronomical one. It is a house centric chart format '
                    btntext='View More'
                    className='card2'
                    /></ul>
                   <ul className='cards__items'>
                    <Carditem
                    src='\images\east.jfif'
                    text='East indian'
                    label=''
                    desc='the East Indian chart looks like a blend of the North Indian and South Indian Charts. It is also a Rashi centric format '
                    btntext='View More'
                    className='card1'
                    />
                     <Carditem
                    src='\images\west.jfif'
                    text='Western Zodiac'
                    label=''
                    desc='it is  use a wheel format to represent a birth chart is a literal representation of the Earth with the zodiac in a circular path around it'
                    btntext='View More'
                    className='card2'
                    />
                     </ul>
                </div>
           
            </div>
            
     </div>
      
    </div>
  );
}
export default A2;
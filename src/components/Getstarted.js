import React from 'react';
import '../App.css'
import { Button } from './Button';
import Carditem from './Carditem';
import Cards from './Cards';
import './Cards.css';
import './Getstarted.css';

 function Getstarted() {
  return (
    <div className='hero-container'>
      <video src="videos/Milky Way Glowing At Night.mp4" autoPlay loop muted/>
     <div>
     
            <div className='cards__container'>
                <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <Carditem
                    src='\images\p4.jfif'
                    text='Zodiac Signs'
                    label='Zodiac Signs'
                    desc='In Western astrology, and formerly astronomy, the zodiac is divided into twelve signs, each occupying 30° of celestial longitude '
                    btntext='View More'
                    className='card1'
                    />
                    <Carditem
                    src='\images\v2.jpg'
                    text='Birth Chart'
                    label='Birth Chart'
                    desc='Astrology Birth chart or the Natal Chart is a astrological chart which shows the position of the sun '
                    btntext='View More'
                    className='card2'
                    />
                    <Carditem
                    src='\images\v5.jfif'
                    text='Chinese Zodiac'
                    label='Chinese Zodiac'
                    desc='The Chinese zodiac is a classification scheme based on  lunar calendar that assigns animal and its reputed attributes to each year '
                    btntext='View More'
                    path='/services'
                    className='card1'
                    />
                    </ul>
                     
                </div>
           
            </div>
            
     </div>
      
    </div>
  );
}
export default Getstarted;
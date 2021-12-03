import React from 'react';
import '../App.css'
import { Button } from './Button';
import Carditem from './Carditem';
import Cards from './Cards';
import './Cards.css';
import './Getstarted.css';

 function A4() {
  return (
    <div className='hero-container'>
      <video src="videos/Milky Way Glowing At Night.mp4" autoPlay loop muted/>
     <div>
     
            <div className='cards__container'>
                <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <Carditem
                    src='\images\A1.jpg'
                    text='Love compatibility'
                    label=''
                    desc='Find out if you and your love interest or partner are soul mates, best friends, or a recipe for disaster. '
                    btntext='View More'
                    className='card1'
                    />
                    <Carditem
                    src='\images\work.jpg'
                    text='Work compatibility'
                    label=''
                    desc=' Know how to interact most effectively with all your colleagues, bosses, and partners. '
                    btntext='View More'
                    className='card2'
                    /></ul>
                   <ul className='cards__items'>
                      


                    </ul>
                     
                </div>
           
            </div>
            
     </div>
      
    </div>
  );
}
export default A4;
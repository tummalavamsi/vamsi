import React from 'react';
import '../App.css'
import { Button } from './Button';
import Carditem from './Carditem';
import Cards from './Cards';
import './Cards.css';
import './Getstarted.css';

 function A1() {
  return (
    <div className='hero-container'>
      <video src="videos/Milky Way Glowing At Night.mp4" autoPlay loop muted/>
     <div>
     
            <div className='cards__container'>
                <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <Carditem
                    src='\images\fire.jfif'
                    text='Fire Signs'
                    label=''
                    desc='The consequences of fire — a substance that can giveth life and taketh away  '
                    btntext='View More'
                    path='./M1'
                    className='card1'
                    />
                    <Carditem
                    src='\images\water.jpg'
                    text='Water Signs'
                    label=''
                    desc=' On the basest level, both speak to emotion, intuition, and memory if the fire signs embody a solar or Martian energy. '
                    btntext='View More'
                    path='./M2'
                    
                    className='card2'
                    /></ul>
                   <ul className='cards__items'>
                    <Carditem
                    src='\images\earth.png'
                    text='Earth Signs'
                    label=''
                    desc='The stuff that emerges from the earth — precious stones, harvests, clay — has real value in the material world '
                    btntext='View More'
                    path='./M3'
                    className='card1'
                    />
                     <Carditem
                    src='\images\air.png'
                    text='Air Signs'
                    label=''
                    desc='They are experts in the ephemeral, the things of this world that lack physical form'
                    btntext='View More'
                    path='./M4'
                    className='card2'
                    />
                     </ul>
                </div>
           
            </div>
            
     </div>
      
    </div>
  );
}
export default A1;
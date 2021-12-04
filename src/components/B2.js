import React from 'react';
import '../App.css'
import { Button } from './Button';
import Carditem from './Carditem';
import Cards from './Cards';

import footer from '../components/footer';



import Navbar from '../components/Navbar2';
import Navbar2 from '../components/Navbar2';
 function B2() {
  const style = {
    height: "1050px",
    width: "700px",
    borderWidth: '8px', 
    }
    const style1 = {
        height: "650px",
        width: "1000px",
        borderWidth: "1500px",
        }
   

     return (
      <div className='framebox'>
     <Navbar2 /><br />
   

<div>
    wood signs:<br/>
<br/><p> According to Chinese culture, the Wood sign's lucky properties are as follows: </p>
              Which element are you?
                    <br/>The animal cycle includes the Rat, the Ox, the Tiger, the Rabbit, the Dragon, the Snake, the Horse, the Goat, the Monkey, the Rooster, the Dog and the Pig.
                    <br/> <iframe style={style}src="/images/f6.webp"></iframe>
                  <br/>What other elements is the Wood sign compatible with?
                  <br/>Element interactions are like life cycles.
                  <br/>The five generating interactions are "fueling, forming, containing, carrying, and feeding."
                  <br/>Wood fuels fire.
<br/>Fire forms earth (volcanoes, ash, etc.).
<br/>  Earth contains metal.
<br/>   Metal carries water (buckets, pipes, etc.).
 <br/>  Water feeds wood (trees, plants, etc.)
 <br/>Therefore, Wood signs are most compatible with their own element. They can count on each other for help and support.
 <br/> <iframe style={style}src="/images/f7.webp"></iframe>
 <br/>Which element are you?
<br/>Wood and Fire are also romantically inclined. They are strong allies and their relationship has the potential to be highly spirited.

  </div>
  <footer/>
  </div>
  )
}

export default B2;
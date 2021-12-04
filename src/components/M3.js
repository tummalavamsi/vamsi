import React from 'react';
import '../App.css'
import { Button } from './Button';
import Carditem from './Carditem';
import Cards from './Cards';

import footer from '../components/footer';



import Navbar from '../components/Navbar2';
import Navbar2 from '../components/Navbar2';
 function M3() {
  const style = {
    height: "550px",
    width: "300px",
    borderWidth: '8px', 
    }
    const style1 = {
        height: "550px",
        width: "500px",
        borderWidth: "100px",
        }
   

     return (
      <div className='framebox'>
     <Navbar2 /><br />
   

<div>
Earth signs<br/>
<br/><p> Their patience and artistic skills are enviable. They’ll always use their beautiful minds and high standards to work on long-term projects that require a lot of energy and commitment—but they must align with their values.<br/>Elements are always four signs away from each other: For earth signs, Taurus is the second sign of the zodiac, Virgo is the sixth, and Capricorn is the tenth. This placement is something astrologers call “trine,” and it brings good vibes. It also means that earth signs tend to get along with other earth signs, whether as friends, lovers, family members, or even coworkers. They just ~get~ each other, y’know? BTW, earth signs also mesh well with water signs—they’re something called “congenial elements.” You need both earth and water to make plants grow, after all!

</p>
                     <br/>
                     TAURUS (APRIL 20 TO MAY 20) <p>Tauruses are the artists of the zodiac. They use their innate sense of beauty and sensuality to manifest their dreams, and they inspire others to do the same. On a good day, Tauruses are persistent, hard workers, reliable, and stable. On a bad day, these bulls can be indulgent, lazy, possessive, jealous, and controlling. All in all, they’re one of the most loyal zodiac signs out there because they will never waver in their heart or affections—although they might flirt a little with others for extra attention.<br/> Their fixed sign nature means they value commitment and can be just a little bit (okay, a lot) stubborn. </p>
                     <iframe style={style}src="/images/s1.png"></iframe>
<br/> VIRGO (AUGUST 23 TO SEPTEMBER 22)<p> Virgos represent the analytical minds of the zodiac. They’re a mutable sign, known to be logical, practical, sensible, and reasonable. They take a systematic approach to life and they value truth and justice—they use their finely tuned minds to investigate situations and decipher alibis through reason. Can they be a little obsessive about the tiniest details? Yes. But only because they’re trying to stay knowledgeable. Their chameleonlike mentality makes them open to change, one baby step at a time.</p>
<iframe style={style}src="/images/s2.png"></iframe>
  <br/>CAPRICORN (DECEMBER 22 TO JANUARY 19)
  <p>Capricorns are the initiators of the earth signs—they’re known to be ambitious and hardworking. As cardinal signs, they’re not afraid to take charge. They place an importance on control and status and have a rep for being stoic and proud. That’s because they like to watch situations unfold from a distance, but they are actually extremely sensitive and reflective deep down. Never one to sit by the sidelines, Capricorns take action and always complete what they begin. And contrary to astrological slander, they rarely hold a grudge. </p>
  <iframe style={style}src="/images/s3.png"></iframe>
  
  
  </div>
  <footer/>
  </div>
  )
}

export default M3;
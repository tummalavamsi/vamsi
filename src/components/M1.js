
import React from 'react';
import '../App.css'
import { Button } from './Button';
import Carditem from './Carditem';
import Cards from './Cards';

import footer from '../components/footer';



import Navbar from '../components/Navbar2';
import Navbar2 from '../components/Navbar2';
 function M1() {
  const style = {
    height: "650px",
    width: "500px",
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
Fire signs<br/>
<br/><p> Aries, Leo, and Sagittarius are the three fire signs of the zodiac, which means they reside in this element's part of the astrological calendar.</p>
                     <br/>
                     Aries (March 21-April 19) <p>Because Aries is also a cardinal sign (a.k.a. the born leader of the astrology pack), action and impulsivity are the traits most closely associated with Aries' fire sign manifestation, explains Montúfar.   </p>
<p>"This is also the sign of the zodiac that can be the most competitive, as it likes to be first." And ICYMI, Aries signs are pretty freakin' amazing at starting things, like projects and goals. </p>
<br/> Leo (July 23-August 22)<p> They are a fixed fire sign that know how to look inside themselves, explains Joyce. (If you're a fixed sign, it means your Sun sign falls into the fixed quadruplicity, and is associated with traits like determination, stability, and following through on goals.) "They separate their strengths and weaknesses, revealing their strengths to the world, and hiding their weakness until they are improved," she notes. "An evolved Leo will be open to learning and sharing what they know with others."</p>
  <br/>Sagittarius (November 22-December 21)
  <p>With a Sagittarius, passion becomes inspiration, Joyce says. They take the insight and passion that fire gives them and translates it into wisdom, she explains. "Sagitarians seek ideals that inspire, and when they feel inspired they can do the impossible." You love to see it.  </p>

  
  
  </div>
  <footer/>
  </div>
  )
}

export default M1;
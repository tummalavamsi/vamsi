import React from 'react';
import '../App.css'
import { Button } from './Button';
import Carditem from './Carditem';
import Cards from './Cards';

import footer from '../components/footer';



import Navbar from '../components/Navbar2';
import Navbar2 from '../components/Navbar2';
 function S4() {
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

                     <p>The Western Zodiac Wheel Chart </p>
                   <br/>  <p>Western astrologers use a wheel format to represent a birth chart. This is a literal representation of the Earth with the zodiac in a circular path around it. The 360 degrees of the zodiac are divided equally into slice-like sections from the centre of the circle. The ascendant is always on the left and the Rashis follow in an anticlockwise direction. The circle of the chart has degree markings. The chart very precisely marks the planets’ placement along the circle exact to the degree. This makes it very easy to see the interplay of the planets to the exact degree. For example, in an Indian birth chart, we read the degree planets to see the strength of aspects. But in a Western chart, it is as simple as looking at the chart. </p>
  <br/> <p>The house divisions do not always follow the Sign divisions. The house borders could change depending on the ascendant degree. The lines that divide each house are at the cusp or junction of that house. The cusp of the first house is called the ascendant, the opposite cusp of the 7th house is the descendant. Cusp of the fourth house is the IC or Imum Coeli. The cusp of the 10th house is the MC or Medium Coeli (midheaven). Synastry or chart comparison is done by creating an inner and outer circle. The information of one chart is in the inner circle and the second chart in the outer circle in this astrology chart format.</p>
   <br/><p>Which Format Is The Best</p>
   <br/>The best chart depends entirely on one’s personal preferences. So, regardless of the chart format used, when one understands the logic behind each format it is very easy to decode them. Instead of being stumped when presented with an unfamiliar chart format, one can translate it to a more familiar astrology chart template. The debate of the advantages of South Indian vs North Indian chart format does not matter so much when you understand both.
  </div>
  <footer/>
  </div>
  )
}

export default S4;
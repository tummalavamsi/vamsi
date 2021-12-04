import React from 'react';
import '../App.css'
import { Button } from './Button';
import Carditem from './Carditem';
import Cards from './Cards';

import footer from '../components/footer';



import Navbar from '../components/Navbar2';
import Navbar2 from '../components/Navbar2';
 function S1() {
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
What is a Birth chart<br/>
<br/><p> A birth chart is a chart or drawing that sets out the 360 degrees of the zodiac. This is usually divided into houses or Rashis. The position of the planets in the zodiac is then indicated by placing them in the houses. Some charts use short forms of the planet names while others use symbols or glyphs to indicate the planets. Some astrologers write the planet degrees next to the planet while others create a table next to the chart. Retrograde planets are indicated by underlining them, placing them in brackets or with an (R) placed next to the planet. The name birth chart is misleading as a chart can be created for any moment in time for various purposes. The asking of a question or the dawn of a new year are also charts that are studied. </p>
                     <br/>
                     <iframe style={style}src="/images/s7.png"></iframe>
                     <p>The South Indian Chart </p>
                   <br/>  <p>The South Indian chart format is basically a depiction of the zodiac exactly as it is laid out. However, instead of a circle which is rather hard to draw it is depicted as a square that is divided into twelve boxes. Each of these 12 boxes is the representation of a Rashi of 30 degrees. The Rashis are always in the same boxes. To better understand the concept, imagine that the earth is at the centre of the chart and the series of boxes around it is the zodiac belt. <br/>The South Indian Chart is a Rashi centric format. When the chart is filled, the planets are placed in the box that is assigned to the Rashi or sign in which it is located. The ascendant is marked in the appropriate box. It is denoted either by a slanting line or by writing Asc or Lagna in the appropriate box. One then counts the houses from the ascendant or Lagna manually. This may seem to be a cumbersome process to some but with practice and time, the astrologer is able to visualise the house numbers without counting every time. </p>
  <br/><p> Advantages Of The South Indian Chart </p>
  <br/> <p>The advantages of this chart format are that it more closely resembles the actual astronomy of the sky. It also makes it very easy to see the dignity of the planet at a glance. When one wants to shift the Lagna and view the chart from the Moon or from any other planet, there is no need to redraw or visualise the chart. One chart serves all the purposes. 

People who are used to seeing aspects in other charts need to do a lot of manual counting in a South Indian chart. This too gets so much easier with practice. The counting of the South Indian chart starts from the second box in the topmost row which is always Aries (Mesha) and then proceeds in a clockwise direction of counting. There is no necessity to number any of the boxes since the Rashis are always in the same boxes and they do not need labelling. The house numbers are also easy to find by counting from the box marked Lagna/ascendant. Some people do label the house numbers for ease of use.<br/>The South Indian chart makes it very easy to do a Rashi wise chart comparison. The two charts are studied side by side. Since the Rashis are static it is easy to see where the planet of one person is placed in relation to the planet of the other. For example, while matchmaking one can locate the Moon of the boy. Then easily count to the Moon of the girl’s chart and see how the relationship would play out. </p>

  </div>
  <footer/>
  </div>
  )
}

export default S1;
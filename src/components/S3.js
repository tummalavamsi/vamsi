import React from 'react';
import '../App.css'
import { Button } from './Button';
import Carditem from './Carditem';
import Cards from './Cards';

import footer from '../components/footer';



import Navbar from '../components/Navbar2';
import Navbar2 from '../components/Navbar2';
 function S3() {
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

                     <p>The East Indian  Chart </p>
                   <br/>  <p>At first glance, the East Indian chart looks like a blend of the North Indian and South Indian Charts. It is also a Rashi centric format. The centre top square is always Aries (Mesha). However, unlike the South Indian chart, the counting is anti-clockwise. The ascendant is marked in the appropriate section and house counting is done manually. The chart has the same advantages as the South Indian Chart format. It is more in line with the astronomical layout of the earth with the zodiac around it. The chart also makes it easier to see the dignity of the planets. However, house counting is difficult for the new astrologer who has to rely on manual counting from the marked ascendant.</p>
  <br/><p> Advantages Of The East Indian Chart  </p>
  <br/> <p>The East Indian Chart is also easier to view from different viewpoints without having to redraw the chart. There is no necessity to number any of the sections as the Rashis are static in the format. It does have awkward corner houses. These are harder to populate when there is a cluster of many planets in that Rashi.</p>

  </div>
  <footer/>
  </div>
  )
}

export default S3;
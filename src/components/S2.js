import React from 'react';
import '../App.css'
import { Button } from './Button';
import Carditem from './Carditem';
import Cards from './Cards';

import footer from '../components/footer';



import Navbar from '../components/Navbar2';
import Navbar2 from '../components/Navbar2';
 function S2() {
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

                     <p>The North Indian Chart </p>
                   <br/>  <p>The North Indian Kundali or diamond chart format is more of an astrological perspective than an astronomical one. It is a house centric chart format. Here the houses that each section denotes are static. The Rashis assigned to the sections change. So the topmost box in the chart is always the first and the lowermost is always the seventh. The advantage of the North Indian chart format is that one is able to see the Kendras and Trikonas at a glance. </p>
  <br/><p> Advantages Of The North Indian Chart  </p>
  <br/> <p>The North Indian Chart always has the first house in the topmost middle diamond. The counting proceeds from 1st to 2nd house and so on in an anti-clockwise direction. 

<br/>The North Indian chart is meaningless without numbering as the Rashi of each house cannot be determined without numbers. So, in a North Indian chart, the numbers denote the Rashis. They are numbered; Aries (Mesha) – 1, Taurus (Rishaba) – 2, Gemini (Mithuna) – 3, Cancer (Kartaka) – 4, Leo (Simha) – 5, Virgo (Kanya) – 6, Libra (Tula) – 7, Scorpio (Vrischik) – 8, Sagittarius (Dhanus) – 9, Capricorn (Makara) – 10, Aquarius (Kumbha) – 11 and Pisces (Meena) – 12. <br/>Synastry comparison by houses is easy with the North Indian chart. However, comparison by Rashi is more difficult for the newer astrologer. The non-Kendra houses have less space in this format. If one were to have a cluster of many planets this chart would be harder to fill in neatly.   

People who are used to seeing aspects in other charts need to do a lot of manual counting in a South Indian chart. This too gets so much easier with practice. The counting of the South Indian chart starts from the second box in the topmost row which is always Aries (Mesha) and then proceeds in a clockwise direction of counting. There is no necessity to number any of the boxes since the Rashis are always in the same boxes and they do not need labelling. The house numbers are also easy to find by counting from the box marked Lagna/ascendant. Some people do label the house numbers for ease of use.<br/>The South Indian chart makes it very easy to do a Rashi wise chart comparison. The two charts are studied side by side. Since the Rashis are static it is easy to see where the planet of one person is placed in relation to the planet of the other. For example, while matchmaking one can locate the Moon of the boy. Then easily count to the Moon of the girl’s chart and see how the relationship would play out. </p>

  </div>
  <footer/>
  </div>
  )
}

export default S2;
import React from 'react';
import '../App.css'
import { Button } from './Button';
import Carditem from './Carditem';
import Cards from './Cards';

import footer from '../components/footer';



import Navbar from '../components/Navbar2';
import Navbar2 from '../components/Navbar2';
 function M4() {
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
Air signs<br/>
<br/><p> In astrology, there are four elements (fire, water, earth, and air) that categorize and describe the 12 zodiac signs. The three air signs are Gemini, Libra, and Aquarius, and they’re the thinkers, communicators, and doers of the zodiac. They analyze, synthesize, and probe. They breeze through life, never stopping to catch their breath. They have a “live and let live” mentality, and their intelligence helps them make decisions easily. These smartypants lead with their *brains* (unlike say, water signs, who lead with their hearts).
<br/>Not to toot my own horn—because I am an air sign—but air signs are the leaders of society. They have the ability to see situations from an intellectual perspective without being clouded by emotion. They can come off as cold or even unfeeling, but they def do have emotions—they just like to keep them private instead of wearing them on their sleeve. Air signs are all about ideas, achievements, and correct information. They’re always focused on the details—and yes, they’ll point out every typo. If you need someone to think of a brilliant idea and then follow it through, call an air sign.
</p>
                     <br/>
                     GEMINI (MAY 21 TO JUNE 20) <p>Gemini is a mutable air sign, meaning it comes at the end of a season (spring, in this case) and is known to be flexible. This chatty sign has the ability to understand situations from a mile away, which helps them make decisions easily. There’s no right or wrong way to think or act, according to Gemini.<br/>As the sign represented by the twins, Geminis embrace fluidity in life and try to understand all sides of a situation, thanks to their dualistic nature. They’re the ones sharing important news, truth, and gossip. Haters say they’re two-faced, but as mutable signs, they are actually just really socially flexible and know how to move from social group to social group. They also don’t take things too seriously, so think twice before starting an argument over something a Gem said—they might not even have meant it! </p>
                     <iframe style={style}src="/images/s4.png"></iframe>
<br/> LIBRA (SEPTEMBER 23 TO OCTOBER 22)<p> Libra is a cardinal air sign, meaning it comes at the start of a season (fall) and is known to be a leader. Intellectual Libras critique art and society as they help shape the world. And the rumors are true—they’re the flirts of the zodiac. They’re also *the* sign of relationships and they’re always crushing on someone. And someone’s probably crushing on them too—they’re ruled by Venus, which means they’re just naturally attuned to all things having to do with beauty and pleasure.<br/>As the sign of the scales, Libras are all about balance. They’re known for their ability to make fair decisions, but it often takes them a long time to make a choice because they can relate to both sides—which is why they can be indecisive and tend to go to others for advice. They just want to be super sure they’re making the right decision!</p>
<iframe style={style}src="/images/s5.png"></iframe>
  <br/>AQUARIUS (JANUARY 20 TO FEBRUARY 19)
  <p>Aquarius is a fixed air sign, meaning it falls in the middle of a season (winter) and is known to be stubborn. They’re represented by the water bearer because they give knowledge to the world. Aquarians are the humanitarians of the zodiac, and they speak to and for the collective. They process situations, relationships, and news at a deeper and slower pace than the other air signs because they’re focused on the big picture—they’re trying to see how the information they learn can help society evolve.<br/>Aquarius is sometimes called the “weirdo” or “alien” of the zodiac because they march to the beat of their own drum. They tend to be innovative, unique thinkers who come up with out-of-the-box ideas that are actually pretty genius. The water bearer is always living in the future!

</p>
  <iframe style={style}src="/images/s6.png"></iframe>
  
  
  </div>
  <footer/>
  </div>
  )
}

export default M4;
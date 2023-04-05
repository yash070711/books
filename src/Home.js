import React from "react";
import "./Home.css";
import im from "./img/pt1.jpg"
import im1 from "./img/icon-1@2x.png"
import im2 from "./img/icon-2@2x.png"
import im3 from "./img/icon-3@2x.png"
import im4 from "./img/astrology-circle-orance-dots-1536x1536.jpg"
import im5 from "./img/2023-Horoscopes-Astrology_Getty-scaled-e1672166946139 (1).webp"
function Home() {
  return (
    <div className="home">
      <div className="home__container">       

  
<h1  className='c1'  >
Welcome to Jyotish Bhumi kendra
 </h1>
<img 
className="img3"
src={im5}/>
<div class="grid-container">
<div class="grid-item"
>   <img
          className="img1"
     src={im4} alt='image' />
    
  {/* <button className="butt"><b>Contact</b></button> */}
  </div>
  <hr/>
  <div class="grid-item"
>  
    <img
    className="img2"
  src={im}
/>
<br/>
   <p1 className="name">PT.Narayan Shastri ji <br/>
   </p1> 
   <p2 className="name"  >Astrologer </p2>

  </div>
  {/* <div class="grid-item">
  <img
  className="img1"
          
     src='https://mysta.b-cdn.net/wp-content/uploads/2022/01/hands-1268x1536.png' alt='image' />
  </div> */}
  
  <div class="grid-item">
    <img
    className="im1"
    src={im1}/>
     <p2 className="pri">Privacy</p2>
  </div>
 
  <div class="grid-item">
    <img
    className="im1"
    src={im2}/>
     <p2 className="pri">Result guarantee</p2>
  </div>
  <div class="grid-item">
    <img
     className="im1"
    src={im3}/>
      <p2 className="pri">Competence</p2>
  </div>
  {/* <div class="grid-item">
  <div className="p1">Contact The Best Astrologer in Delhi Dr. Anima Bhattacharya
Having 20+ years of expertise, Anima Astrologer is the best astrologer in Delhi. She is the top 10 famous genuine astrologer in Delhi. Contact her now.

DR.ANIMA BHATTACHARYA
ASTROLOGER, PALMIST, GEMOLOGIST, NUMEROLGIST

FOR APPOINTMENT

+91-9899380854, +91-9211188879, +91-9654108569

TIMING - 10:30 AM TO 8:00 PM</div>
  </div>
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>
   */}
</div>
        
          
        </div>
      </div>
  );
}

export default Home;
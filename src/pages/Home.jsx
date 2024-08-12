import React from 'react';
import BigTitle from "../components/BigTitle";
import GoldDrizzle from "../components/GoldDrizzle";
import GoldSplash from "../components/GoldSplash";
import Droplets from "../components/Droplets";
import aboutDroplet from "../pictures/aboutDroplet.png";
import priceDroplet from "../pictures/priceDroplet.png";
import uploadDroplet from "../pictures/uploadDroplet.png";
import howProductWorks from "../pictures/howProductWorksIMG.png";

function Home() {
     return (
      <>
      <a href="#blackBackgroundHome">
         <BigTitle />
         <GoldDrizzle />
      </a>
      <a href="#scrollTrigger">
         <div id="blackBackgroundHome">

            <Droplets link='/about' src={aboutDroplet} class="aboutDropIMG" alt="about droplet"/>
            <Droplets link='/product' src={uploadDroplet} class="uploadDropIMG" alt="upload droplet" />
            <Droplets link='/pricing' src={priceDroplet} class="priceDropIMG" alt="price droplet" />
               {/* CONNECT PRICING TO THE COMING SOON PAGE */}

            <GoldSplash />
         </div>
      </a>

      
      <div class="goldBoxLarge">
         <div id="scrollTrigger">
            <h1 class="productInfoTEXThome">
                  How Does Our Product Work?
            </h1>
         </div>
         <a href="/product">
            <img src={howProductWorks} class="howProductWorksIMG" alt="image of how product works"></img>
            <button type="button" class="tryButtonHome">
               Try it out!
            </button>
         </a>
         </div>
      </>
     );
 }
export default Home;

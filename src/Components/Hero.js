import React from "react";
import Header from "./Header";
import Heart from "../imge/heart.png";
import hero_img from "../imge/hero_image.png";
import hero_img_backg from "../imge/hero_image_back.png";
import Calories from "../imge/calories.png";
import {motion} from "framer-motion";
import NumberCounter from "number-counter";
function Hero(props) {
 const transition = {type:'spring',duration: 2}
 const mobail = window.innerWidth<=786 ? true : false;
  return (
    <section className="hero" id='home'>
      {/*hero left section started  hero  ong tomon boshlandi */}
      <div className="blur hero-blur"></div>

      <div className="left-h">

        <Header />

        {/*The best add the best degan yozuv qoshildi heroga     */}
        <div className="the-best-add">
          <motion.div
          initial={{left:mobail ? '138px':'238px'}}
          whileInView={{left:'8px'}}
          transition={{...transition,type:'tween'}}
          >
          </motion.div>
          <span>the best fitness club in the town</span>
        </div>

        {/*Hero Headeng*/}

        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div className="span">
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/*sarlavha texti tugadi*/}

        {/*figures section started*/}
        <div className="figurist">
          <div>
            <span>
            <NumberCounter end={140} start={100} delay='4' preFix='+' />
            </span>
            <span>expert coachos</span>
          </div>
          <div>
            <span>
               <NumberCounter end={200} start={100} delay='4' preFix='+' />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
             <NumberCounter end={50} start={0} delay='4' preFix='+' />
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        {/*figures section end*/}

        {/*Hero Buttons started*/}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
        {/*Hero Buttons end*/}
      </div>
      {/*hero left section end hero  ong tomon tugadi */}

      {/*Rigt Hero started / Chap tomon Hero boshlandi   */}
      <div className="right-h">
        <button className="btn">Join Now</button>
        <div className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>
        {/*Right Hero Background-img started / Right Hero Background-img boshlash */}
        <img src={hero_img} alt="" className="hero_img" />


        <motion.img src={hero_img_backg} alt="" className="hero-img-back"
                    initial={{right:'11rem'}}
                    whileInView={{right:'21rem'}}
                    transition={{...transition,type:'tween'}} />

        {/*Right Hero Background-img end  / Right Hero Background-img tugadi */}
        {/*calories*/}
        <motion.div className="calories"
                    initial={{right:'45rem'}}
                    whileInView={{right:'30rem'}}
                    transition={{...transition,type:'tween'}}
        >
          <img src={Calories} alt="" />
          <div>
          <span>Calories Burned</span>
          <span>222 kcal</span>
          </div>
        </motion.div>
      </div>
      {/*Rigt Hero end / Chap tomon Hero tugadi   */}
    </section>
  );
}

export default Hero;

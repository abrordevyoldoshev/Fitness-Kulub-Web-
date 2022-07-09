import React from 'react';
import Header from "./Header";
import Heart from '../imge/heart.png'
import hero_img from '../imge/hero_image.png'
import hero_img_backg from '../imge/hero_image_back.png'
import Calories from '../imge/calories.png'

function Hero(props) {
    return (<section className='hero'>
        {/*hero left section started  hero  ong tomon boshlandi */}
        <div className="left-h">
            <Header/>
            {/*The best add the best degan yozuv qoshildi heroga     */}
            <div className="the-best-add">
                <div></div>
                <span>the best fitness club in the town</span>
            </div>
            {/*Hero Headeng*/}
            <div className="hero-text">
                <div>
                    <span className='stroke-text'>Shape </span>
                    <span>Your</span>
                </div>
                <div>
                    <span>Ideal body</span>
                </div>
                <div className='span'>
                    <span>
                        In here we will help you to shape and build your ideal body
                        and live up your life to fullest
                    </span>
                </div>
            </div>
            {/*sarlavha texti tugadi*/}
            {/*figures section started*/}
            <div className="figurist">
                <div>
                    <span>+140</span>
                    <span>expert coachos</span>
                </div>
                <div>
                    <span>+978</span>
                    <span>members joined</span>
                </div>
                <div>
                    <span>+50</span>
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
                <img src={Heart} alt=""/>
                <span>Heart Rate</span>
                <span>116 bpm</span>
            </div>
            {/*Right Hero Background-img started / Right Hero Background-img boshlash */}
            <img src={hero_img} alt="" className='hero_img'/>
            <img src={hero_img_backg} alt="" className='hero-img-back'/>
            {/*Right Hero Background-img end  / Right Hero Background-img tugadi */}
            {/*calories*/}

                <div className="calories">
                <img src={Calories} alt=""/>
                <span>Calories Burned</span><span>222 kcal</span>
            </div>
        </div>
        {/*Rigt Hero end / Chap tomon Hero tugadi   */}
    </section>);
}

export default Hero;

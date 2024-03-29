import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image_back from '../../assets/hero_image_back.png';
import hero_image from '../../assets/hero_image.png';
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";

import {motion} from 'framer-motion'
const Hero = () => {
    const transition = {type: 'spring', duration : 3}
    const mobile = window.innerWidth<=768 ? true: false;
  return (
    <div className="Hero">
         
         <div className="blur hero-blur"></div>

        <div className="left-h">
            <Header/>
            <div className="the-best-ad">
                <motion.div
                initial={{left:mobile? "165px":'238px'}}
                whileInView={{left:'8px'}}
                transition={{...transition,type:'tween'}}
                >

                </motion.div>
                <span>The Best Fitness Club In The Town</span>
            </div>


            {/* hero heading */}
            <div className="hero-text">
                <div>
                    <span className="stroke-text">Shape </span>
                    <span>Your</span>
                </div>
                <div>
                    <span>Ideal Body</span>
                </div>
                <div  >
                    <span >in here we will help you to shape and buildyour
                         ideal body and live up your life to fulest</span>
                </div>
            </div>
            <div className="figures">
                <div>
                    <span>+140</span>
                    <span>expert coaches</span>
                    
                </div>
                <div>
                    <span>+978</span>
                    <span>members joined</span>
                </div>
                <div>
                    <span>+50</span>
                    <span>fitnes programs</span>
                </div>
            </div>


            {/* hero button */}

            <div className="hero-button">
                <button className="btn">Get Started</button>
                <button className="btn">Learn More</button>
            </div>
        </div>
        <div className="right-h">
            <button className="btn">Join Now</button>

            <motion.div 
            initial={{right: "-1rem"}}
            whileInView={{right:"4rem"}}
            transition={transition}
            className="heart-rate">
                
                <img src={heart} alt=""/>
                <span>Heart Rate</span><span>116 bpm</span>
            </motion.div>

            {/* hero images */}
            <img src={hero_image} alt="" className="hero-image"/>
            <motion.img 
            initial={{right:'8rem'}}
            whileInView={{right:'16rem'}}
            transition={transition}
            src={hero_image_back} alt="" className="hero-image-back"/>
            
            {/* calories */}
            <motion.div 
            initial={{right: "47rem"}}
            whileInView={{right:"39rem"}}
            transition={transition}
            className="calories">
                <img src={calories} alt=""/>
                <div>
                    <span>Calories Burn </span>
                    <span> 220 kcal</span>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Hero
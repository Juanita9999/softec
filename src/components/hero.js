import React from 'react';
import './hero.css'; // If you plan to style your component separately

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-content">
                <h1><span>The next</span> 
                <span>generation</span> 
                <span> payment</span>
                 <span>ways.</span>
                 </h1>
                <button className="hero-button">Get Started for free</button>
                <h6> <span>Over</span> <span className='underline-item'> <span className='curved-line'><svg width="101" height="15" viewBox="0 0 101 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.336934 5.24122C16.3707 0.583948 58.7418 -4.19312 99.9564 13.9568" stroke="white" stroke-width="1.5"></path>
                        </svg></span>50k+client </span> <span>all over the world </span></h6>
                </div>
            <div className='hero-image'>
                <img src='images/phone-hand.png'></img>
            </div>    
           
        </div>
    );
};

export default Hero;

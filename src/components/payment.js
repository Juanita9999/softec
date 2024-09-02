import React from 'react';
import './payment.css'; 

const Payment = () => {
    return (
        <div className="payment">
            <div className="payment-cont">
                <h1><span>The next</span> 
                <span>generation</span> 
                <span> payment</span>
                 <span>ways.</span>
                 </h1>
                <button className="hero-button">Get Started for free</button>
                <h6>Over <span>50k+client </span> all over the world </h6>
                </div>
            <div className='hero-image'>
                <img src='images/phone-hand.png'></img>
            </div>    
           
        </div>
    );
};

export default Payment;

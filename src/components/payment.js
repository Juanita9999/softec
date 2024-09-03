import React from 'react';
import './payment.css'; 

const Payment = () => {
    return (
        <div className="payment-container container">
          <h2><span className='top-title'>You'll love our</span> <span>powerful payments.</span> </h2>
          <p>We've got all your payments covered</p>
            <div className="payment-types">
              <div className='scan-go'>
                <h2>Scan & Go</h2>
                <p>Transform your payment link into a QR code that 
                 <br/>customers can scan with their <br/>
                phone to pay.</p>
                <div className='mobilephone'><img  src='images/mobile.png' alt='mobilephone'/></div>
                </div>  
                <div className='email-link'>
                <h2>Easily Send Requesrs vai e-mail or SMS</h2>
                <p>... or copy-paste the link</p>
                <div className='email-images'>
                <img  className='message' src='images/message.png' alt='email'/>
                <img className='payment3' src='images/payment3.png' alt='emailpay'/>
                </div>
                </div> 
            </div>    
           <div className='online-billing'>
           <h2>Online Billing & <br/>
           Invoicing Payments.</h2>
           <p>Get paid faster with Online Invoicing <br/>
           and the Virtual Terminal.</p>
           <div className='billing-images'>
           <img className='buywith' src='images/buywith.png' alt='buywith'/>
           <img className='invoice' src='images/invoice.png' alt='invoice'/>
           </div>
           </div>
           
        </div>
    );
};

export default Payment;

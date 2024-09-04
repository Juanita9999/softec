import React, { useState, useEffect } from 'react';
import './payment.css';

const OnlineBilling = ({ title, description, exploreText, images , myClass }) => {
  return (
    <div className={`online-billing ${myClass} `}>
      <div className='billing-left'>
        <h2 className='billing-title'>{title}</h2>
        <p className='billing-description'>{description}</p>
        <div className='billing-info'><p>{exploreText}</p><span>&#8594;</span></div>
      </div>
      <div className='billing-images'>
        {images.map((image, index) => (
          <img key={index} className={image.className} src={image.src} alt={image.alt} />
        ))}
      </div>
    </div>
  );
};

const Payment = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const billingData = [
    {
      title: "Online Billing & Invoicing Payments.",
      myClass: 'online',
      description: "Get paid faster with Online Invoicing and the Virtual Terminal.",
      exploreText: "Explore Invoicing Tools",
      images: [
        { className: 'invoice', src: 'images/invoice.png', alt: 'invoice' },
        { className: 'buywith', src: 'images/buywith.png', alt: 'buywith' },
      ]
    },
    {
      title: "Recurring Payments & Subscriptions",
      myClass: 'recurring',
      description: "Automate your payments with recurring invoices and subscription plans.",
      exploreText: "Learn More",
      images: [
        { className: 'invoice', src: 'images/invoice.png', alt: 'subscription' },
        { className: 'atmcard', src: 'images/atmcard.png', alt: 'atm card' },
      ]
    },
    {
      title: "Customizable Invoices",
      myClass: 'customizable',
      description: "Create and send professional invoices with customizable templates.",
      exploreText: "Customize Your Invoice",
      images: [

        { className: 'animate', src: 'images/animatenew.png', alt: 'animation' },
      ]
    }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % billingData.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval); // Clean up the interval on component unmount
  }, [billingData.length]);

  return (
    <section>
    <div className="payment-container container">
      <h2><span className='top-title'>You'll love our</span> <span>powerful payments.</span></h2>
      <p>We've got all your payments covered</p>
      <div className="payment-types">
        <div className='scan-go'>
          <h2>Scan & Go</h2>
          <p>Transform your payment link into a QR code that customers can scan with their phone to pay.</p>
          <div className='mobilephone'><img src='images/mobile.png' alt='mobilephone' /></div>
        </div>
        <div className='email-link'>
          <h2>Easily Send Requests via e-mail or SMS</h2>
          <p>... or copy-paste the link</p>
          <div className='email-images'>
            <img className='message' src='images/message.png' alt='email' />
            <img className='payment3' src='images/payment3.png' alt='emailpay' />
          </div>
        </div>
      </div>
      
    </div>
    <div className="billing-slider">
        {billingData.map((item, index) => {
          let slideClass = '' ;
          if (index === currentSlide) {
            slideClass = 'active';
          } else if (index === (currentSlide + 1) % billingData.length) {
            slideClass = 'next';
          } else if (index === (currentSlide - 1 + billingData.length) % billingData.length) {
            slideClass = 'previous';
          }

          return (
            <div key={index} className={`slide ${slideClass} container `}>
              <OnlineBilling
                title={item.title}
                description={item.description}
                exploreText={item.exploreText}
                myClass={item.myClass}
                images={item.images}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Payment;

import React from "react";
import './service.css';

const Service = () => {
  return (
    <section>
    <div className="service-container container">
      <div className="service-text">
        <h2>We provide the best service for you</h2>
        <p>We've got all your payments covered</p>
      </div>
      <div className="service-info">
        <div> <h2>35</h2> <span>Active Users</span> </div>
        <div> <h2>240+</h2> <span>Trsuted Companies</span> </div>
        <div> <h2>78k</h2> <span>Customer Care</span> </div>

      </div>
    </div>
   <div className="service-box container">
    <div className="main-box"> 
      <div className="box-shape1">  </div>
    <div className="box-1">
      <img src="images/online.png" alt="online"/> <h5>Online<span>Explore &#8594;</span></h5> 
    </div>
    </div>
    <div className="main-box"> 
      <div className="box-shape2">  </div>
    <div className="box-2">
      <img src="images/banktransfer.png" alt="banktransfer"/> <h5>Bank Transfers<span>Explore &#8594;</span></h5> 
    </div>
    </div>
    <div className="main-box"> 
      <div className="box-shape3">  </div>
    <div className="box-3">
      <img src="images/keyed.png" alt="keyed"/> <h5>keyed <span>Explore &#8594;</span></h5> 
    </div>
    </div>
    <div className="main-box"> 
      <div className="box-shape4">  </div>
    <div className="box-4">
      <img src="images/inperson.png" alt="inperson"/> <h5>In Person<span>Explore &#8594;</span></h5> 
    </div>
    </div>
    
    

   </div>
   <div className="free-tools container">
      <div className="tools" >
        <h3>more free tools than you can handle</h3>
        </div>
      
        <ul className="tool-types">
          <li>Invoicing</li>
          <li>ICard Vault</li>
          <li>Recurring Plans</li>
          <li>Online Checkout</li>
          <li>Customer Portal</li>
          <li>Payment Links</li>
          <li>Point-of-Sale</li>
          <li>Inventory</li>
          <li>Payment Links</li>
          <li>Online Food Ordering</li>
          <li>Virtual Terminal</li>
          <li>QR Codes</li>
  
        </ul>
    </div>
    </section>
  
  )}

  export default Service;
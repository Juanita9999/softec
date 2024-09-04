import React from "react";
import './header.css';

const Header = () => {
  return (
    <div className="header-section container">
      <div className="header-items">
        <img src="images/logowhite.png" alt="softeclogo"/>
      
      <nav className="nav-links">
        <li>Home</li>
        <li>Pages</li>
        <li>Blogs</li>
        <li>Project</li>
        <li>Contact</li>
      </nav>
      <div className="header-right">
        <h4>Log In</h4>
        <button>Get Started</button>
      </div>
    </div>
    </div>
  )}
  export default Header;
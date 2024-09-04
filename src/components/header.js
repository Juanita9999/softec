import React, { useState } from "react";
import './header.css';
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

 

  const handleMenuClick =()=>{
    setMenuOpen(true)
   
  }

  const handleMenuClose =()=>{
    setMenuOpen(false)
  }
  console.log(menuOpen)
  return (
    <div className="header">
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
        <div className="menu-hamburger" onClick={handleMenuClick}>
      <IoMdMenu size={28}/>
      </div>
      </div>
      
    
          <div className={`side-menu ${menuOpen? 'openMenu': ''}`}>
            <div className="sidebar">
            <div className="menu-close" onClick={handleMenuClose}>
      <IoMdClose size={28}/>
      </div>
            <nav className="sidebar-links ">
            <li>Home</li>
            <li>Pages</li>
            <li>Blogs</li>
            <li>Project</li>
            <li>Contact</li>
          </nav>
          <div className="header-right ">
            <h4>Log In</h4>
            <button>Get Started</button>
          </div>
            </div>
            
          </div>
      

    </div>
    </div>
    </div>
  )}
  export default Header;
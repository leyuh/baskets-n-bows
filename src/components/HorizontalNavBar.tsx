import React from 'react';

import Logo from '../images/logo.png';

import '../styles/HorizontalNavBar.css';

function HorizontalNavBar() {
  return (
    <div id="horizontal-nav-bar">
      <img id="h-nav-bar-logo" src={Logo}/>
      <h1 id="h-nav-bar-title">Baskets &amp; Bows</h1>
      <div id="h-nav-bar-btns-div">
        <a href="#home-section" className="h-nav-bar-btn" id="h-nav-bar-home-btn">Home</a>
        <a href="#about-us-section" className="h-nav-bar-btn" id="h-nav-bar-home-btn">About us</a>
        <a href="#gallery-section" className="h-nav-bar-btn" id="h-nav-bar-home-btn">Gallery</a>
        <a href="#" className="h-nav-bar-btn" id="h-nav-bar-home-btn">How It Works</a>
        <a href="#" className="h-nav-bar-btn" id="h-nav-bar-home-btn">Contact</a>
      </div>
    </div>
  );
}

export default HorizontalNavBar;
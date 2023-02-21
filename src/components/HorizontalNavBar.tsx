import React from 'react';

import Logo from '../images/logo.png';

import '../styles/HorizontalNavBar.css';

function HorizontalNavBar() {
  return (
    <div id="horizontal-nav-bar">
      <img id="h-nav-bar-logo" src={Logo}/>
      <h1 id="h-nav-bar-title">Baskets &amp; Bows</h1>
      <div id="h-nav-bar-btns-div">
        <h1 className="h-nav-bar-btn" id="h-nav-bar-home-btn">Home</h1>
        <h1 className="h-nav-bar-btn" id="h-nav-bar-home-btn">About us</h1>
        <h1 className="h-nav-bar-btn" id="h-nav-bar-home-btn">Gallery</h1>
        <h1 className="h-nav-bar-btn" id="h-nav-bar-home-btn">How It Works</h1>
        <h1 className="h-nav-bar-btn" id="h-nav-bar-home-btn">Contact</h1>
      </div>
    </div>
  );
}

export default HorizontalNavBar;
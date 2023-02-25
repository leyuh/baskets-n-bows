import React, { SetStateAction } from 'react';

import Logo from '../images/template.png';

import '../styles/VerticalNavBar.css';

interface VerticalNavBarProps {
    navVis: boolean;
    setNavVis: React.Dispatch<SetStateAction<(boolean)>>
}

export const VerticalNavBar: React.FC<VerticalNavBarProps> = ({navVis, setNavVis}) => {
  return (
    <div id="vertical-nav-bar">
        <h1 id="v-nav-bar-x" onClick={() => {
            setNavVis((prev) => {
                return !prev;
            })
        }}>X</h1>
      <div id="v-nav-bar-btns-div">
        <a href="#home-section" className="v-nav-bar-btn" id="v-nav-bar-home-btn">Home</a><br/>
        <a href="#about-us-section" className="v-nav-bar-btn" id="v-nav-bar-home-btn">About Me</a><br/>
        <a href="#gallery-section" className="v-nav-bar-btn" id="v-nav-bar-home-btn">Gallery</a><br/>
        <a href="#how-it-works-section" className="v-nav-bar-btn" id="v-nav-bar-home-btn">How it Works</a><br/>
        <a href="#contact-section" className="v-nav-bar-btn" id="v-nav-bar-home-btn">Contact</a>
      </div>
    </div>
  );
}

export default VerticalNavBar;
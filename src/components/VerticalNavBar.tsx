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
        <h1 className="v-nav-bar-btn" id="v-nav-bar-home-btn">Home</h1>
        <h1 className="v-nav-bar-btn" id="v-nav-bar-home-btn">About Me</h1>
        <h1 className="v-nav-bar-btn" id="v-nav-bar-home-btn">Gallery</h1>
        <h1 className="v-nav-bar-btn" id="v-nav-bar-home-btn">How it Works</h1>
        <h1 className="v-nav-bar-btn" id="v-nav-bar-home-btn">Contact</h1>
      </div>
    </div>
  );
}

export default VerticalNavBar;
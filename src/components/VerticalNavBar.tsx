import React, { SetStateAction, useRef, useEffect } from 'react';

import Logo from '../images/template.png';

import '../styles/VerticalNavBar.css';

interface VerticalNavBarProps {
    navVis: boolean;
    setNavVis: React.Dispatch<SetStateAction<(boolean)>>
}

export const VerticalNavBar: React.FC<VerticalNavBarProps> = ({navVis, setNavVis}) => {

  const barRef = useRef<any>();

  useEffect(() => {
    barRef.current.className = "preload";
  }, [])

  return (
    <div ref={barRef} id="vertical-nav-bar" className={navVis ? "open-anim" : "close-anim"} style={
      navVis ? {right: "0px"} : {right: "-210px"}
    }>
        <h1 id="v-nav-bar-x" onClick={() => {
            setNavVis((prev) => {
                return !prev;
            })
        }}>X</h1>
      <div id="v-nav-bar-btns-div">
        <a href="#home-section" className="v-nav-bar-btn" id="v-nav-bar-home-btn" onClick={() => {
          setNavVis(false);
        }}>Home</a><br/>
        <a href="#about-us-section" className="v-nav-bar-btn" id="v-nav-bar-home-btn" onClick={() => {
          setNavVis(false);
        }}>About Me</a><br/>
        <a href="#gallery-section" className="v-nav-bar-btn" id="v-nav-bar-home-btn" onClick={() => {
          setNavVis(false);
        }}>Gallery</a><br/>
        <a href="#how-it-works-section" className="v-nav-bar-btn" id="v-nav-bar-home-btn" onClick={() => {
          setNavVis(false);
        }}>How it Works</a><br/>
        <a href="#contact-section" className="v-nav-bar-btn" id="v-nav-bar-home-btn" onClick={() => {
          setNavVis(false);
        }}>Contact</a>
      </div>
    </div>
  );
}

export default VerticalNavBar;
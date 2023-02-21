import React, { SetStateAction } from 'react';

import Logo from '../images/logo.png';
import HomeBackgroundImg from '../images/products/product1.jpeg';

import '../styles/MainPage.css';


export const MainPage: React.FC = () => {
  return (
    <div id="main-div">
      <div id="home-section">
        <img id="home-background-img" src={HomeBackgroundImg}/>
        <img id="home-logo" src={Logo}/>
      </div>
      <div id="about-us-section">

      </div>
    </div>
  );
}

export default MainPage;
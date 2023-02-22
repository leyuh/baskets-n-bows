import React, { SetStateAction } from 'react';

import Logo from '../images/logo.png';
import HomeBackgroundImg from '../images/home-img.jpeg';
import AboutUsImg from '../images/about-us-img.png';
import GalleryBackgroundImg from '../images/gallery-img-1.jpeg';

import '../styles/MainPage.css';


export const MainPage: React.FC = () => {
  return (
    <div id="main-div">

      <div className="page-section" id="home-section">
        <img id="home-background-img" src={HomeBackgroundImg}/>
        <img id="home-logo" src={Logo}/>
      </div>

      <div className="page-section" id="about-us-section">
        <img id="about-us-img" src={AboutUsImg}/>
        <div className="info-panel" id="about-us-div">
          <h2>About Us</h2>
          <p>"Do what you love and you'll never work a day of your life."</p>
          <p>
          &emsp;I have always been a passionate gifter. For the people I love, I go the extra mile to be sure they know how well I know them and how much they mean to me. From choosing the perfect treasure to dressing it up with the fitting paper and bows, I adore every step. The extra effort is always felt and appreciated. Let me come along side of you to show your loved ones how much they mean to you. I enjoy nothing more.
          </p>
        </div>
      </div>

      <div className="page-section" id="gallery-section">
        <img id="gallery-background-img" src={GalleryBackgroundImg}/>
      </div>

    </div>
  );
}

export default MainPage;
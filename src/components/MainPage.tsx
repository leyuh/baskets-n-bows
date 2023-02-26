import React, { SetStateAction } from 'react';

import Logo from '../images/logo.png';
import HomeBackgroundImg from '../images/home-img.jpeg';
import AboutUsImg from '../images/about-us-img-2.jpeg';
import GalleryBackgroundImg from '../images/gallery-img-1.jpeg';
import HowItWorksImg from '../images/how-it-works-img-3.png';
import FacebookImg from '../images/facebook.png';
import InstaImg from '../images/insta.png';

import GalleryImage from './GalleryImage';

import GALLERY from '../galleryModule';

import { ContactMe } from '../components/Contact';

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
          <h2>About Me</h2>
          <p>"Do what you love and you'll never work a day of your life."</p>
          <p>
          &emsp;I have always been a passionate gifter.  For the people I love, I go the extra mile to be sure they know how well I know them and how much they mean to me.  From choosing the perfect treasure to dressing it up with the fitting paper and bows, I adore every step.  The extra effort is always felt and appreciated.  Let me come along side of you to show your loved ones how much they mean to you.  I enjoy nothing more.
          </p>
        </div>
      </div>

      <div className="page-section" id="gallery-section">
        <img id="gallery-background-img" src={GalleryBackgroundImg}/>
        <h1 id="gallery-title">Gallery</h1>
        <div id="gallery-grid-div">
          {GALLERY.map((val, i) => {
            let img = val[0];
            let desc = val[1];
            return <GalleryImage
              path={img}
              desc={desc}
              key={i}
              k={i}
            />
          })}
        </div>
      </div>

      <div className="page-section" id="how-it-works-section">
        <div className="info-panel" id="how-it-works-div">
          <h2>How it Works</h2>
          <ul id="how-it-works-list">
            <li id="li-1">
              <h3 className="step-number">1.</h3>
              <h6 className="step-desc">It's easy!</h6>
            </li>
            <li id="li-2">
              <h3 className="step-number">2.</h3>
              <h6 className="step-desc">First, tell me your budget, and the day you'll need delivery or pickup.</h6>
            </li>
            <li>
              <h3 className="step-number">3.</h3>
              <h6 className="step-desc">Talk to me about the theme you have in mind. 	&#40;Don't have one? No problem! I can help.&#41;</h6>
            </li>
            <li>
              <h3 className="step-number">4.</h3>
              <h6 className="step-desc">Tell me as many little details as you can about your special person. I can use just about anything!</h6>
            </li>
            <li>
              <h3 className="step-number">5.</h3>
              <h6 className="step-desc">Finally, relax. Let me do the leg work, planning, customizing and designing of a distinctive gift that is truly tailored for your recipient.</h6>
            </li>
          </ul>
        </div>
        <div id="how-it-works-imgs-div">
          <img className="how-it-works-img" id="how-it-works-img-1" src={HowItWorksImg}/>
          <img className="how-it-works-img" id="how-it-works-img-2" src={HowItWorksImg}/>
        </div>
      </div>

      <div className="page-section" id="contact-section">

        <h1 id="contact-title">Contact</h1>
        
        <div className="info-panel" id="contact-info-div">
          <h2>Nanci Devlin</h2>
          <p>nancisbasketsnbows@icloud.com</p>
          <p>541.979.3840</p>
          <p>www.facebook.com/nancisbasketsnbows</p>
          <p>Instagram: @nancisbasketsnbows</p>
          <div id="socials-div">
            <a href="https://www.facebook.com/nancisbasketsnbows/" target="_blank"><img id="facebook-img" src={FacebookImg}/></a>
            <a href="https://www.instagram.com/nancisbasketsnbows/" target="_blank"><img id="instagram-img" src={InstaImg}/></a>
          </div>
          
        </div>

        <div className="info-panel" id="message-div">
          <h2>Message Me</h2>
          <ContactMe/>
        </div>
      </div>

    </div>
  );
}

export default MainPage;
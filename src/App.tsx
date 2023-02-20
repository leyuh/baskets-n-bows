import React, { useState, useEffect } from 'react';

import NavBarImg from './images/navbar.png';

import HorizontalNavBar from './components/HorizontalNavBar';
import VerticalNavBar from './components/VerticalNavBar';

import './styles/App.css';

function App() {

  const [mobile, setMobile] = useState(false);
  const [navVis, setNavVis] = useState<boolean>(false);

  // set mobile
  useEffect(() => {
    console.log("ping");
    let width = window.innerWidth;
    if (width < 1000) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [])
  
  return (
    <div id="app">
      {mobile ? navVis ? <VerticalNavBar
        navVis={navVis}
        setNavVis={setNavVis}
      /> : <img id="v-nav-bar-btn" src={NavBarImg} onClick={() => {
        setNavVis((prev) => {
          return !prev;
        })
      }}/> : <HorizontalNavBar/>}
    </div>
  );
}

export default App;

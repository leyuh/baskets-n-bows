import React, { useState, useEffect } from 'react';

import NavBarImg from './images/navbar.png';

import HorizontalNavBar from './components/HorizontalNavBar';
import VerticalNavBar from './components/VerticalNavBar';
import MainPage from './components/MainPage';

import './styles/App.css';

function App() {

  const [mobile, setMobile] = useState(false);
  const [navVis, setNavVis] = useState<boolean>(false);

  useEffect(() => {
    document.title = 'Baskets & Bows';
  }, []);

  // set mobile
  useEffect(() => {
    console.log("ping");
    let width = window.innerWidth;
    if (width <= 1200) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [])
  
  return (
    <div id="app">
      {mobile ? <VerticalNavBar
        navVis={navVis}
        setNavVis={setNavVis}
      /> : <HorizontalNavBar/>}
      {mobile ? <img id="v-nav-bar-btn" src={NavBarImg} onClick={() => {
        setNavVis((prev) => {
          return !prev;
        })
      }}/> : ""}
      

      <MainPage/>
    </div>
  );
}

export default App;

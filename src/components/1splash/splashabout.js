import React, { useRef, useState, useEffect } from 'react';
import dim from '../../media/theme/dim.json';
import color from '../../media/theme/colors.json';
import '../../css/splash.css';


const SplashAbout = ({ recipe }) => {

// const { loading, isSupported, share } = useWebShare();

const [windowWidth, setWindowWidth] = useState(window.innerWidth)

const shareData = {
  title: 'MDN',
  text: 'Learn web development on MDN!',
  url: 'https://developer.mozilla.org',
}

  return (
    <>
      <div className={'splash-about'}>

        <div className={'splash-about-fade'}>
        </div>
      </div>
    </>
  );
};

export default SplashAbout;

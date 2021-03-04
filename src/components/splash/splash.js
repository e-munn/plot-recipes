import React, { useRef, useState, useEffect } from 'react';
import { scaleOrdinal } from 'd3'
import dim from '../../media/theme/dim.json';
import color from '../../media/theme/colors.json';
import '../../css/splash.css';

import creamy from '../../media/images/creamy-white-bean-soup-with-spicy-paprika-oil.jpg'


const Splash = ({ recipe }) => {


const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  return (
    <>
      <div
        className={'splash'}
        style={{
          backgroundImage: `url(${(creamy)})`
        }}
        >
        <div className={'splash-cover'}>
          <div
            className={'splash-title fot'}

            >
              {recipe.name}
          </div>
        </div>
      </div>
    </>
  );
};

export default Splash;

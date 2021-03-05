import React, { useRef, useState, useEffect } from 'react';
import { scaleOrdinal } from 'd3'
import dim from '../../media/theme/dim.json';
import color from '../../media/theme/colors.json';
import '../../css/splash.css';

import creamy from '../../media/images/creamy-white-bean-soup-with-spicy-paprika-oil.png'
import hearty from '../../media/images/hearty-whole-wheat-pasta-with-brussels-sprouts-cheese-and-potato.png'
import sweet from '../../media/images/sweet-potatoes-with-cilantro-chiles-sauce.png'
import tourte from '../../media/images/tourte-aux-pommes-de-terre.png'


const SplashImage = ({ recipe }) => {

const imageMap = scaleOrdinal()
  .domain(['creamy-white-bean-soup-with-spicy-paprika-oil', 'hearty-whole-wheat-pasta-with-brussels-sprouts-cheese-and-potato', 'sweet-potatoes-with-cilantro-chiles-sauce', 'tourte-aux-pommes-de-terre'])
  .range([creamy,hearty,sweet, tourte])

const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  return (
    <>
      <div
        className={'splash'}
        style={{
          backgroundImage: `url(${( imageMap(recipe.path) )})`
        }}
        >
        <div className={'splash-cover'}>
          <div
            className={'splash-title'}
            >
              {recipe.name}
          </div>
        </div>
      </div>
    </>
  );
};

export default SplashImage;

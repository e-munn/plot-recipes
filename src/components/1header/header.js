import React, { useRef, useState, useEffect } from 'react';
import { scaleOrdinal } from 'd3'
import color from '../../media/theme/colors.json';
import dim from '../../media/theme/dim.json';

import creamy from '../../media/images/creamy-white-bean-soup-with-spicy-paprika-oil.png'
import hearty from '../../media/images/hearty-whole-wheat-pasta-with-brussels-sprouts-cheese-and-potato.png'
import sweet from '../../media/images/sweet-potatoes-with-cilantro-chiles-sauce.png'
import tourte from '../../media/images/tourte-aux-pommes-de-terre.png'


const Header = ({ recipe, aWidth, thinPage }) => {

const imageMap = scaleOrdinal()
  .domain(['creamy-white-bean-soup-with-spicy-paprika-oil', 'hearty-whole-wheat-pasta-with-brussels-sprouts-cheese-and-potato', 'sweet-potatoes-with-cilantro-chiles-sauce', 'tourte-aux-pommes-de-terre'])
  .range([creamy,hearty,sweet, tourte])

  const gradient_1 = 'linear-gradient(0deg, rgba(249,247,241,1) 0%, rgba(244,235,217,1) 100%)'

  const thinPageHeader = {
    width: `${ '100vw' }`,
    height: `${ '100vw' }`,
    maxHeight: `${ dim.m.cutoff }px`,
    maxWidth: `${ dim.m.cutoff }px`
  }


  return (
    <header
      style={thinPageHeader}
      >
      <div
        className={'header-img'}
        style={{
          width: `${ '100%' }`,
          height: `${ '100%' }`,
          backgroundImage: `url(${( imageMap(recipe.path) )})`
        }}
        >
        <div className={'header-gradient'}
          style={{
            width: `${ '100%' }`,
            height: `${ '100%' }`
          }}
          >
          <div
            className={'header-title'}
            >
              {recipe.name}
          </div>
        </div>
      </div>

      <div
        className={'header-sub'}
        style={{
          background:`${ (aWidth[0]) ? gradient_1 : 'none' }`
        }}
        >
        <div className={'splash-about-fade'}>
        </div>
      </div>
    </header>
  );
};

export default Header;

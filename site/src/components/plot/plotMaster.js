import React, { useState, useEffect, useRef } from "react";
import '../../App.css';
import Plot from './plot.js';
import { select, easeSin, easeCubicIn, easeCubicOut, transition } from 'd3';
import arrowup from '../../media/ui-symbols/arrowup.svg';
import arrowdown from '../../media/ui-symbols/arrowdown.svg';
import cleanRecipe from './clean.js';


const PlotMaster = ({ recipe }) => {

  var recipeAndHeight = cleanRecipe(recipe)
  recipe = recipeAndHeight[0]
  var svgHeight = recipeAndHeight[1] + 100

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)

  return (
    <div>
      <svg width={windowWidth} height={svgHeight}>
        <Plot
          recipe={recipe}
        />
      </svg>
    </div>
  );
};

export default PlotMaster;

import React, { useState, useEffect, useRef } from "react";
import '../App.css';

import listize from './lists/listize.js';
import plotize from './plot/plotize.js';

import PlotMaster from './plot/plotMaster.js';
import IngredientList from './lists/ingredientList.js';
import Splash from './splash/splash.js';


const PageMaster = ({ recipe }) => {

  var ingredientList = listize(recipe)

  var recipeAndHeight = plotize(recipe)
  var recipePlot = recipeAndHeight[0]
  var svgHeight = recipeAndHeight[1]

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)



  return (
    <div>
        <Splash
          recipe={ recipe }
        />
        <IngredientList
          ingredientList={ingredientList[0]}
          svgHeight={ingredientList[1]}
        />
        <PlotMaster
          recipePlot={recipePlot}
          svgHeight={svgHeight}
        />
    </div>
  );
};

export default PageMaster;

import React, { useState, useEffect, useRef } from "react";
import '../App.css';

import listize from './3lists/listize.js';
import plotize from './2plot/plotize.js';

import PlotMaster from './2plot/plotMaster.js';
import IngredientList from './3lists/ingredientList.js';
import SplashImage from './1splash/splashimage.js';
import SplashAbout from './1splash/splashabout.js';



const PageMaster = ({ recipe }) => {

  var ingredientList = listize(recipe)
  var recipeAndHeight = plotize(recipe)


  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)


  return (
    <div>
        <SplashImage
          recipe={ recipe }
        />
        <SplashAbout
          recipe={ recipe }
        />
        <PlotMaster
          recipePlot={recipeAndHeight[0]}
          svgHeight={recipeAndHeight[1]}
          preheat={recipeAndHeight[2]}

        />
        <IngredientList
          ingredientList={ingredientList[0]}
          svgHeight={ingredientList[1]}
        />
    </div>
  );
};

export default PageMaster;

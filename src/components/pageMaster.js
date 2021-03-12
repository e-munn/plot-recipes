import React, { useState, useEffect, useRef } from "react";
import '../App.css';

import '../css/page.css';


import listize from './3lists/listize.js';
import plotize from './2plot/plotize.js';

import PlotMaster from './2plot/plotMaster.js';
import IngredientList from './3lists/ingredientList.js';
import Header from './1header/header.js';

import dim from '../media/theme/dim.json';


const PageMaster = ({ recipe, aWidth }) => {

  var ingredientList = listize(recipe)
  var recipeAndHeight = plotize(recipe)

  const thinPage = {
    width: `${ '100vw' }`,
    maxWidth: `${ dim.m.cutoff }px`
  }


  return (
    <main
      style={{
        // maxWidth: `${ 400 }px`
      }}
      >
        <Header
          recipe={ recipe }
          aWidth={aWidth}
          thinPage={thinPage}
        />
        <PlotMaster
          recipePlot={recipeAndHeight[0]}
          svgHeight={recipeAndHeight[1]}
          preheat={recipeAndHeight[2]}
          thinPage={thinPage}

        />

        <IngredientList
          ingredientList={ingredientList[0]}
          svgHeight={ingredientList[1]}
          thinPage={thinPage}
        />

    </main>
  );
};

export default PageMaster;

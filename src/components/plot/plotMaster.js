import React, { useState, useEffect, useRef } from "react";
import Plot from './plot.js';
import { select, easeSin, easeCubicIn, easeCubicOut, transition } from 'd3';
import arrowup from '../../media/ui-symbols/arrowup.svg';
import arrowdown from '../../media/ui-symbols/arrowdown.svg';

import '../../css/page.css';




const PlotMaster = ({ recipePlot, svgHeight }) => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)

  const [open, setOpen] = useState(0);

  return (
    <>
      <div
        className={'head'}
        onClick={ () => { setOpen(1 - open) } }
        >
        PLOT
      </div>
      <svg width={windowWidth} height={svgHeight * open}>
        <Plot
          recipe={recipePlot}
        />
      </svg>
      <hr/>

    </>
  );
};

export default PlotMaster;

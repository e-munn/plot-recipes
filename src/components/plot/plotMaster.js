import React, { useState, useEffect, useRef } from "react";
import Plot from './plot.js';
import { select, easeSin, easeCubicIn, easeCubicOut, transition, scaleOrdinal } from 'd3';
import arrowup from '../../media/ui-symbols/arrowup.svg';
import arrowdown from '../../media/ui-symbols/arrowdown.svg';
import '../../css/page.css';




const PlotMaster = ({ recipePlot, svgHeight }) => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)

  const [open, setOpen] = useState(0);
  const [display, setDisplay] = useState(0);
  const map = scaleOrdinal()
    .domain([0, 1])
    .range(['none', 'block'])

  return (
    <div>
      <div
        className={'head'}
        onClick={ () => {
          setDisplay( 1-display )
          setTimeout( () => {
            setOpen( 1 - open )
          }, 1)
        } }
        >
        PLOT
      </div>
      <svg width={windowWidth} display={ map(display) } height={ open * (svgHeight + 55) }>
        <Plot
          recipe={recipePlot}
        />
      </svg>
      <hr/>
    </div>
  );
};

export default PlotMaster;

import React, { useRef, useState, useEffect } from 'react';
import { scaleOrdinal } from 'd3'
import dim from '../../media/theme/dim.json';
import color from '../../media/theme/colors.json';
import '../../css/page.css';


const IngredientList = ({ ingredientList, svgHeight }) => {


const [windowWidth, setWindowWidth] = useState(window.innerWidth)

const listDisplay = [];

ingredientList.forEach((d,i) => {
  listDisplay.push(
    <text
      className={'plot-animation-fill plot-text weight-2'}
      x={ 40 }
      y={ 12 + i * 20 }
      fill={color.blue2}
      textAnchor={'start'}
      fontSize={dim.i.font.size}
      alignmentBaseline={'middle'}
      >
      { d.data.ingredient }
      <tspan
        className={'plot-text weight-3'}

        alignmentBaseline={'middle'}
        fontSize={dim.i.font.amountSize}
        fill={color.blue2}
        >
        {' - ' + d.data.ing_amt + ' ' + d.data.ing_unit}
      </tspan>
    </text>
  )
})

const dot = [];

ingredientList.forEach((d,i) => {
  dot.push(
    <circle
      cx={ 20 }
      cy={ 10 + i * 20 }
      r={ dim.i.radius }
      fill={ color.blue2 }
      >
    </circle>
  )
})


  const [open, setOpen] = useState(0);


  const map = scaleOrdinal()
    .domain([0, 1])
    .range(['none', 'block'])

  return (
    <>
      <div
        className={'head'}
        onClick={ () => { setOpen(1-open) } }
        >
        INGREDIENTS
      </div>
      {/* <svg width={windowWidth}  display={map(open)} height={ open * svgHeight }> */}
        <svg width={windowWidth} height={ open * svgHeight }>

        { dot }
        { listDisplay }
      </svg>
      <hr/>
    </>
  );
};

export default IngredientList;

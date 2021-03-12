import React, { useRef, useState, useEffect } from 'react';
import { scaleOrdinal } from 'd3'
import dim from '../../media/theme/dim.json';
import color from '../../media/theme/colors.json';
import '../../css/page.css';
import '../../css/plot.css';



const IngredientList = ({ ingredientList, svgHeight, thinPage }) => {

const [windowWidth, setWindowWidth] = useState(window.innerWidth)

const listDisplay = [];


const clean = (a, b) => {
  var c = '';
  if (a == null) {
    a = ''
  }
  if (b == null){
    b = ''
  }
  if ( (a == null) && (b == null) ) {
  } else {
    c = ' - ' + a + ' ' + b
  }
  return c
}


ingredientList.forEach((d,i) => {
  listDisplay.push(
    <text
      className={'plot-animation-fill plot-text'}
      x={ 40 }
      y={ i * 24 }
      fill={color.blue2}
      textAnchor={'start'}
      fontSize={ 17 }
      fontWeight={ 500 }

      alignmentBaseline={'middle'}
      >
      { d.data.ingredient }
      <tspan
        className={'plot-text'}
        alignmentBaseline={'middle'}
        fontSize={ 15 }
        fontWeight={ 400 }

        fill={color.blue2}
        >
        { clean(d.data.ing_amt, d.data.ing_unit) }
      </tspan>
    </text>
  )
})

const dot = [];

ingredientList.forEach((d,i) => {
  dot.push(
    <circle
      cx={ 20 }
      cy={  i * 24 }
      r={ dim.i.radius }
      fill={ color.blue2 }
      >
    </circle>
  )
})


  const [open, setOpen] = useState(1);
  const [display, setDisplay] = useState(1);

  const map = scaleOrdinal()
    .domain([0, 1])
    .range(['none', 'block'])

  return (
    <>
      <div
        className={'head'}
        style={ thinPage }
        onClick={ () => {
          setDisplay( 1-display )
          setTimeout( () => {
            setOpen( 1 - open )
          }, 1)
        }}
        >
        INGREDIENTS
      </div>

      <svg width={windowWidth}  display={ map(display) } height={ open * (svgHeight + 110) }>
        <g
          style={{ transform: `translate(${ 0 }px, ${ 35 }px)`  }}>
          { dot }
          { listDisplay }
        </g>
      </svg>
    </>
  );
};

export default IngredientList;

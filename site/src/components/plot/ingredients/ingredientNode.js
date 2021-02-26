import React, { useRef } from 'react';

import { select, max, sum,  hierarchy, linkHorizontal, easeSin, easeCubicIn, easeCubicOut, transition } from 'd3';


const IngredientNode = ({ root, color, dim, a, b, j, focusG, setFocusG }) => {

  const focusRef = useRef();


  const label = (
    <text
      className={'name'}
      key={'ingredient' + b + j}
      x={ b.data.pX }
      y={ b.data.pY }
      style={{textTransform:'capitalize'}}
      fontWeight={500}
      fill={`${color.blue2}`}
      textAnchor={'start'}
      fontSize={dim.i.textSize}
      alignmentBaseline={'bottom'}
      >
      { b.data.ingredient}
    </text>

  )
  const dot = (
    <circle
      className={'name'}
      key={'ingredient' + b + j}
      r={4}
      cx={ b.data.pX + 20}
      cy={ b.data.pY }
      fill={`${color.blue2}`}
      >
    </circle>

  )

  return (
    <g>
      {/* {label} */}
      {dot}

    </g>

  );
};

export default IngredientNode;

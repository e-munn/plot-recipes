import React, { useRef } from 'react';

import { select, max, sum,  hierarchy, linkHorizontal, easeSin, easeCubicIn, easeCubicOut, transition } from 'd3';


const Action = ({ root, color, dim, a, b, j, focusG, setFocusG }) => {

  const focusRef = useRef();


  const label = (
    <text
      className={'name'}
      key={'ingredient' + b + j}
      x={ b.data.pX }
      y={ b.data.pY }
      style={{textTransform:'capitalize'}}
      fontWeight={500}
      fill={`${color.orange2}`}
      textAnchor={'start'}
      fontSize={dim.a.textSize}
      alignmentBaseline={'bottom'}
      >
      { b.data.action}
    </text>
  )

  const aHeight = b.data.action_amt * dim.a.amtScale

  const shape = (
    <rect
      className={'name'}
      key={'ingredient' + b + j}
      x={ b.data.pX + 16 }
      y={ b.data.pY }
      width={ dim.a.width }
      height={ aHeight }
      fill={`${color.orange2}`}
      rx={dim.a.width/2}
      >
    </rect>
  )

  return (
    <g>
      {shape}
      {/* {label} */}
    </g>

  );
};

export default Action;

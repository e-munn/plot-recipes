import React, { useState, useEffect, useRef } from 'react';
import { select, max, sum,  hierarchy, linkHorizontal, easeSin, easeCubicIn, easeCubicOut, transition } from 'd3';
import { useSwipeable } from 'react-swipeable';

import '../../../css/plot.css'


const Action = ({ root, color, dim, a, b, j, focus, setFocus}) => {

  const [done, setDone] = useState(0);

  const statesIng = [
    {
      "textposX": b.data.pX + 30,
      "dotposX": b.data.pX - dim.a.width/2 + 20,
      "dotColor": color.orange2,
      "posXTransform": 'translate(18px, 0px)'
    },
    {
      "textposX": b.data.pX + 10,
      "dotposX":  b.data.pX - dim.a.width/2,
      "dotColor": color.orange1,
      "posXTransform": 'translate(0px, 0px)'
    }
  ]

  const focusRef = useRef();

  const label = (
    <text
      className={'plot-animation-fill plot-text weight-2'}
      key={'action' + b + j}
      x={ b.data.pX + 10 }
      y={ b.data.pY + 5 }
      fill={`${statesIng[done].dotColor}`}
      textAnchor={'start'}
      fontSize={dim.a.font.size}
      fontWeight={dim.a.font.weight}
      alignmentBaseline={'middle'}
      ref={ focusRef }
      onClick={ () => setFocus([focusRef.current, b]) }
      >
      {/* { b.data.stepOrder} */}
      { b.data.action}

    </text>
  )

  const aHeight = b.data.action_amt * dim.a.amtScale

  const shape = (
    <rect
      className={'plot-animation-fill'}
      key={'ashape' + b + j}
      x={ b.data.pX - dim.a.width/2 }
      y={ b.data.pY - dim.a.width/2 }
      width={ dim.a.width }
      height={ aHeight + dim.a.width }
      fill={`${statesIng[done].dotColor}`}
      rx={dim.a.width/2}
      >
    </rect>
  )

  // const dot = (
  //   <circle
  //     className={'name'}
  //     key={'ingredient' + b + j}
  //     r={4}
  //     cx={ b.data.pX + 20}
  //     cy={ b.data.pY }
  //     fill={`${color.orange3}`}
  //     >
  //   </circle>
  //
  // )


  const swipe = (
    <rect
      key={'aswipe' + a + b + j}
      x={ b.data.pX - 20 }
      y={ b.data.pY - dim.i.font.size/2 - 2}
      width={ 90 }
      height={ aHeight + dim.a.width + 4}
      fill={ 'transparent' }
      // fill={ 'orange' }
      // opacity={ .3 }

      >
    </rect>
  )

  const tap = (
    <rect
      key={'aswipe' + a + b + j}
      x={ b.data.pX - 20 }
      y={ b.data.pY - dim.i.font.size/2 - 2}
      width={ 90 }
      height={ dim.i.font.size + 10}

      fill={ 'transparent' }
      // fill={ 'orange' }
      // opacity={ .3 }

      >
    </rect>
  )




    const handlers = useSwipeable({
      onSwipedLeft: () => setDone(1),
      onSwipedRight: () => setDone(0),
    });

  return (
    <g
      className={'plot-animation-move'}
      className={'action'}
      style={{transform: `${ statesIng[done].posXTransform }`}}
      {...handlers}

      >
      {shape}
      {label}
      {swipe}
      {tap}



      {/* {dot} */}

    </g>

  );
};

export default Action;

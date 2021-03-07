import React, { useState, useEffect, useRef } from 'react';
import { select, selectAll, max, sum,  hierarchy, linkHorizontal, easeSin, easeCubicIn, easeCubicOut, transition } from 'd3';
import { useSwipeable } from 'react-swipeable';
// import 'fraction.js';

import '../../../css/plot.css'


const IngredientNode = ({ root, color, dim, a, b, j, focus, setFocus }) => {


  const [done, setDone] = useState(0);

  const statesIng = [
    {
      "textposX": b.data.pX + 30,
      "dotposX": b.data.pX + 20,
      "dotColor": color.blue2,
      "posXTransform": 'translate(18px, 0px)'
    },
    {
      "textposX": b.data.pX + 10,
      "dotposX": b.data.pX,
      "dotColor": color.blue1,
      "posXTransform": 'translate(0px, 0px)'
    }
  ]


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

  var texzt = b.data.ingredient + '<tspan>' + b.data.ing_amt + '</tspan>'
  const label = (
    <text
      className={'plot-animation-fill plot-text weight-2 existing'}
      key={'ilabel' + a + b + j}
      x={ b.data.pX + 10 }
      y={ b.data.pY + 1 }
      // style={{filter:'url(#blur)'}}
      fill={`${statesIng[done].dotColor}`}
      textAnchor={'start'}
      fontSize={dim.i.font.size}
      alignmentBaseline={'middle'}
      >
      { b.data.ingredient}
      <tspan
        className={'plot-text weight-3'}
        alignmentBaseline={'middle'}
        fontSize={dim.i.font.amountSize}
        fill={`${statesIng[done].dotColor}`}
        >

        { clean(b.data.ing_amt, b.data.ing_unit) }


      </tspan>
    </text>
  )





  // var length = label.textLength
  //
  //   const labelAmt = (
  //     <text
  //       className={'plot-text'}
  //       className={'plot-animation-fill'}
  //       key={'ilabel' + a + b + j}
  //       x={ b.data.pX + 10 }
  //       y={ b.data.pY + dim.i.font.size }
  //       // style={{textTransform:'capitalize'}}
  //       // style={{filter:'url(#blur)'}}
  //       fill={`${statesIng[done].dotColor}`}
  //       textAnchor={'start'}
  //       fontSize={dim.i.font.amountSize}
  //       fontWeight={dim.i.font.weight}
  //       alignmentBaseline={'middle'}
  //       >
  //       {b.data.ing_amt + ' <tspan> ' + b.data.ing_amt + ' </tspan> ' }
  //     </text>
  //   )

  const dot = (
    <circle
      className={'plot-animation-fill'}
      key={'idot' + a + b + j}
      r={ dim.i.radius }
      cx={ b.data.pX }
      cy={ b.data.pY }
      fill={`${statesIng[done].dotColor}`}
      >
    </circle>

  )
  const focusRef = useRef();

  const swipe = (
    <rect
      key={'iswipe' + a + b + j}
      x={ b.data.pX - 20 }
      y={ b.data.pY - dim.i.font.size/2 - 2}
      width={ 110 }
      height={ dim.i.font.size + 6}
      fill={ 'transparent' }
      ref={ focusRef }
      onClick={ () => setFocus([focusRef.current, b]) }
      >
    </rect>
  )

  const handlers = useSwipeable({
    onSwipedLeft: () => setDone(1),
    onSwipedRight: () => setDone(0)
  });

  return (
    <g
      className={'plot-animation-move'}
      className={'ingredient'}
      style={{transform: `${ statesIng[done].posXTransform }`}}
      {...handlers}
      >
      {label}
      {dot}
      {swipe}

    </g>

  );
};

export default IngredientNode;

import React, { useRef } from 'react';

import { select, linkVertical } from 'd3';
import '../../../css/plot.css'



const Vessel = ({ a, i, dim, color }) => {

  const shape = (
    <rect
      className={'vesselShape'}
      key={'vshape' + i}
      width={ dim.v.s.width }
      height={ a.data.pH }
      x={ a.data.pX }
      y={ a.data.pY }
      transform={`translate(${dim.v.s.width*-.5}, ${0})`}
      fill={ `${color.background}` }
      stroke={  `${color.green1}` }
      strokeWidth={ dim.v.s.stroke }
      rx={ dim.v.s.width * .5 }
      >
    </rect>
  )


  const label = (
    <text
      className={'plot-text'}
      key={'l' + i}
      x={ a.data.pX - 4 }
      y={ a.data.pY + 5 }
      fill={ `${color.green2}` }
      fontSize={dim.v.font.size}
      fontWeight={dim.v.font.weight}
      letterSpacing={dim.v.font.spacing}
      alignmentBaseline={'hanging'}
      >
        {/* {a.data.stepOrder} */}
        {a.data.vessel}
    </text>
  )


  const labelBack = (
    <rect
      key={'lb' + i}
      x={ a.data.pX - 2 }
      y={ a.data.pY + 2 }
      width={ 12 }
      height={ dim.v.font.size + 4 }
      fill={ `${color.background}` }
      stroke={ 'none' }
      >
        {a.data.vessel}
    </rect>
  )



  const transfer = (
    <path
      key={'path' + i}
      stroke={ `${color.transfer}` }
      strokeWidth={3}
      fill={'none'}
      // strokeDasharray={'5 5'}
      d={
        linkVertical()({
          source: [a.data.pX, a.data.pY + a.data.pH],
          target: [a.parent.data.pX, a.parent.data.pY]
        })
        }
      >
    </path>
  )


  return (
      <g>

        {transfer}
        {shape}
        {labelBack}

        {label}


        {/* {dot} */}
      </g>
  );
};

export default Vessel;

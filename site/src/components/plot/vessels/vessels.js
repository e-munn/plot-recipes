import React, { useRef } from 'react';

import { select, linkVertical } from 'd3';

const Vessel = ({ a, i, dim, color }) => {

  const shape = (
    <rect
      className={'vesselShape'}
      key={'c' + i}
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

  const dot = (
    <circle
      key={'c' + i}
      cx={ a.data.pX }
      cy={ a.data.pY + dim.v.s.width/2}
      r={ dim.v.s.width/2 }
      // transform={`translate(${dim.vessel.shape.width*-.5}, ${0})`}
      fill={ `${color.green2}` }
      >
        {a.data.vessel}
    </circle>
  )

  const label = (
    <text
      key={'c' + i}
      x={  a.data.pX }
      y={ a.data.pY }
      fill={ `${color.green2}` }
      fontSize={dim.v.textSize}
      alignmentBaseline={'middle'}
      >
        {a.data.vessel}
    </text>
  )


  const transfer = (
    <path
      stroke={ `${color.transfer}` }
      strokeWidth={5}
      fill={'none'}
      strokeDasharray={'5 5'}
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
        {dot}
      </g>
  );
};

export default Vessel;

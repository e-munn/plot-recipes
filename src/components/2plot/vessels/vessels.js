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
      className={'plot-text weight-1'}
      key={'l' + i}
      x={ a.data.pX - 4 }
      y={ a.data.pY + 5 }
      fill={ `${color.green2}` }
      fontSize={dim.v.font.size}
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
      id={'path' + i}

      stroke={ `${color.transfer}` }
      strokeWidth={3}
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

  const transferText = (
    <text
      key={'textPath' + i}
      className={'plot-text weight-2'}
      fill={'black'}
      textAnchor={'middle'}
      style={{transform : 'translate(4px, 0px)', textTransform : 'none'}}
      >
        <textPath
          href={'#path'+i}
          startOffset={'50%'}
          >
          {a.data.transfer}
        </textPath>
    </text>
  )



  return (
      <g>
        {transfer}
        {transferText}
        {shape}
        {labelBack}
        {label}
        {/* {dot} */}
      </g>
  );
};

export default Vessel;

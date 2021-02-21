import React, { useRef } from 'react';

import { select, linkVertical } from 'd3';


const Vessel = ({ a, i, dim, color, setFocusG }) => {

  const focusRef = useRef();
  var labelText = a.data.vessel.split(' ');
  var labelSplit = []
  var vesselLabel = []
  labelText.forEach((b, j) => {
    labelSplit.push(
      <text
        key={a + b + j}
        alignmentBaseline={'middle'}
        x={ a.posX }
        y={ a.posY + dim.vessel.shape.label*.5 + (j*dim.vessel.shape.textHeight) + (dim.vessel.shape.textHeight/2)}
        >
        {b}
      </text>
    )
  })
  vesselLabel.push(
    <g
      key={'b' + i}
      letterSpacing={1}
      style={{ textTransform: 'capitalize', textAnchor: 'middle'}}
      fontWeight={500}
      fill={`${ color.green2 }`}
      fontSize={dim.vessel.shape.textSize}
      >
      {labelSplit}
    </g>
  )
  const vesselShape = (
    <rect
      className={'vesselShape'}
      key={'c' + i}
      width={ dim.vessel.shape.width }
      height={ a.posHeight }
      x={ a.posX }
      y={ a.posY }
      transform={`translate(${dim.vessel.shape.width*-.5}, ${0})`}
      fill={ `${color.background}` }
      stroke={  `${color.green1}` }
      strokeWidth={ dim.vessel.shape.stroke }
      rx={ dim.vessel.shape.width * .5 }
      >
    </rect>
  )
  const vesselLabelBack = (
    <rect
      key={ 'd' + i }
      x={ a.posX }
      y={ a.posY + (dim.vessel.shape.label * .5) - 5 }
      fill={color.background}
      width={dim.vessel.shape.width + (dim.vessel.shape.stroke) + 4}
      height={labelText.length * dim.vessel.shape.textHeight - dim.vessel.shape.textHeight*.5 + 15}
      transform={`translate(${(dim.vessel.shape.width*-.5)-(dim.vessel.shape.stroke*.5)-2}, ${0})`}
      >
    </rect>
  )


  var vesselTransfer = (<></>)

  if(a.data.finalaction[0] == 'transfer'){
    vesselTransfer =
      (<path
        stroke={ `${color.transfer}` }
        strokeWidth={5}
        fill={'none'}
        strokeDasharray={'5 5'}
        d={
            linkVertical()({
              source: [a.posX, a.posY + a.posHeight],
              target: [a.posX + dim.vessel.shape.width + (dim.vessel.shape.marginWidth*2), a.posY + a.posHeight + dim.vessel.shape.marginHeight]
            })
          }
        >
        </path>)
  } else {
    vesselTransfer = (<></>)
  }




  return (
      <g
        className={'vessel'}
        ref={ focusRef }
        onClick={ () => setFocusG(focusRef.current) }
        >
        {vesselShape}
        {vesselLabelBack}
        {vesselLabel}
        {vesselTransfer}
      </g>
  );
};

export default Vessel;

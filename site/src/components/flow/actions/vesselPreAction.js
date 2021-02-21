import React, { useRef } from 'react';

import { scaleOrdinal } from 'd3-scale';


import grill from '../../../media/symbols/grill.svg'
import knife from '../../../media/symbols/knife.svg'
import oven from '../../../media/symbols/oven.svg'
import stove from '../../../media/symbols/stove.svg'
import whisk from '../../../media/symbols/whisk.svg'
import refridgerate from '../../../media/symbols/refridgerate.svg'




const VesselPreAction = ({ root, color, dim, a, b, j, focusG, setFocusG, labelText }) => {

  const focusRef = useRef();

  const posY = (a) => {
    return a.posY + dim.vessel.shape.label + (j)*(2*(dim.vessel.action.radius + dim.vessel.action.margin)) +
    (dim.vessel.action.radius + dim.vessel.action.margin) +  (dim.vessel.shape.textHeight * labelText.length)
  }

  const symbolMap = scaleOrdinal()
    .domain(['grill', 'knife', 'oven', 'stove', 'whisk', 'refridgerate'])
    .range([grill, knife, oven, stove, whisk, refridgerate])


  return (
    <g
      className={'action'}
      ref={ focusRef }
      onClick={ () => setFocusG(focusRef.current) }
      >

      <g>
        <rect
          height={40}
          width={120}
          fill={'black'}
          visibility={'hidden'}
          x={ a.posX - 200 }
          y={ posY(a) }
          >
        </rect>
      </g>

      <image
        href={symbolMap(a.data.postactions)}
        height={dim.vessel.action.radius}
        x={ a.posX - dim.vessel.action.radius/2}
        y={ posY(a) }
      />

    </g>

  );
};

export default VesselPreAction;

import React, { useRef } from 'react';

import { scaleOrdinal } from 'd3-scale';

import grill from '../../../media/symbols/grill.svg'
import knife from '../../../media/symbols/knife.svg'
import oven from '../../../media/symbols/oven.svg'
import stove from '../../../media/symbols/stove.svg'
import whisk from '../../../media/symbols/whisk.svg'
import refridgerate from '../../../media/symbols/refridgerate.svg'



const VesselPostAction = ({ root, color, dim, a, b, j, focusG, setFocusG, labelText }) => {

  const focusRef = useRef();

  const symbolMap = scaleOrdinal()
    .domain(['grill', 'knife', 'oven', 'stove', 'whisk', 'refridgerate'])
    .range([grill, knife, oven, stove, whisk, refridgerate])



  return (
    <g
      ref={ focusRef }
      onClick={ () => setFocusG(focusRef.current) }
      className={'action'}
      >
      <image
        href={symbolMap(a.data.postactions)}
        height={dim.vessel.action.radius}
        x={ a.posX - dim.vessel.action.radius/2}
        y={ a.posY + a.posHeight - (a.data.postactions.length *
          (2 * (dim.vessel.action.radius + dim.vessel.action.margin))) +
          (j)*(2*(dim.vessel.action.radius + dim.vessel.action.margin)) +
          (dim.vessel.action.radius + dim.vessel.action.margin) + dim.vessel.action.radius/2}
      />


    </g>

  );
};

export default VesselPostAction;

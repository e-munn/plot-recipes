import React, { useState, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import '../../../css/plot.css'
import color from '../../../media/theme/colors.json';
import dim from '../../../media/theme/dim.json';

import platesvg from '../../../media/symbols/plate.svg';


const Plate = ({ root }) => {


  const plate = (
    <image
      // className={'plot-animation-fill'}
      key={'plate'}
      href={ platesvg }
      width={dim.p.d}
      height={dim.p.d}
      x={ root.data.pX - dim.p.d/2}
      y={ root.data.pY - dim.p.d/2}
      fill={color.green1}
      >
    </image>

  )

  const serve = (
    <text
      // className={'plot-animation-fill'}
      key={'platetext'}
      x={ root.data.pX + dim.p.d/2 + 5}
      y={ root.data.pY + 2}
      alignmentBaseline={'middle'}

      fill={color.green2}
      >
        {'Serve'}
    </text>

  )


  return (
    <g>
      {plate}
      {serve}

    </g>

  );
};

export default Plate;

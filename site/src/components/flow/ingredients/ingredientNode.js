import React, { useRef } from 'react';

import { select, max, sum,  hierarchy, linkHorizontal, easeSin, easeCubicIn, easeCubicOut, transition } from 'd3';


const IngredientNode = ({ root, color, dim, nodePosX, nodePosY, a, b, j, focusG, setFocusG }) => {

  const focusRef = useRef();

  return (
    <g
      ref={ focusRef }
      onClick={ () => setFocusG(focusRef.current) }
      className={'ingredient'}
      >
      <text
        className={'name'}
        key={'ingredient' + b + j}
        x={ nodePosX(b) + dim.ingredient.nodeWidth }
        y={ nodePosY(b) }
        style={{textTransform:'capitalize'}}
        fontWeight={500}
        fill={`${color.blue2}`}
        textAnchor={'start'}
        fontSize={dim.ingredient.textSize}
        alignmentBaseline={'bottom'}
        >
        { b.data.ingredient}
      </text>
      <text
        className={'amount'}
        key={'amount' + b + j}
        x={ nodePosX(b) + dim.ingredient.nodeWidth }
        y={ nodePosY(b) + dim.ingredient.amountOffset}
        fill={`${color.blue2}`}
        textAnchor={'start'}
        fontWeight={300}
        fontSize={ dim.ingredient.amountSize }
        alignmentBaseline={'middle'}
        >
        {b.data.amount}
      </text>
      <path
        key={j}
        id={'curve' + j}
        stroke={ b.data.actions.length !== 0 ? `${ color.orange1 }` : `${ color.gray1 }`}
        strokeWidth={dim.ingredient.nodeStroke}
        fill={'none'}
        // strokeLinecap={'round'}
        d={
          linkHorizontal()({
            source: [nodePosX(b) - (dim.ingredient.nodeWidth*.5) - 1, nodePosY(b)],
            target: [b.parent.posX + dim.vessel.shape.width*.5 + 1, nodePosY(b) + 30]
          })
          }
        >
      </path>
      <rect
        key={'node' + b + j}
        width={dim.ingredient.nodeWidth}
        height={dim.ingredient.nodeHeight}
        x={ nodePosX(b) }
        y={ nodePosY(b) }
        fill={ 'transparent' }
        stroke={  `${color.blue1}` }
        strokeWidth={dim.ingredient.strokeWidth}
        transform={`translate(${-.5 * dim.ingredient.nodeWidth}, ${-.5 * dim.ingredient.nodeHeight})`}
        rx={dim.ingredient.radius}
        >
      </rect>

    </g>

  );
};

export default IngredientNode;

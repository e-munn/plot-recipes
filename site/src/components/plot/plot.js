import React, { useRef, useState } from 'react';
import Vessel from './vessels/vessels.js';
import IngredientNode from './ingredients/ingredientNode.js';
import Action from './actions/actions.js';
import color from '../../media/theme/colors.json';
import dim from '../../media/theme/dim.json';

const Plot = ({recipe}) => {

  var root = recipe

  var allVessels = root.descendants().filter(d => ('vessel' in d.data)).filter(d => (d.depth !== 0))

  var flows = []

  allVessels.forEach((a,i) => {

    const vessel = []
    vessel.push(
      <Vessel
        a={a}
        i={i}
        dim={dim}
        color={color}
      />
    )

    const ingredientNodes = []

    a.children.forEach((b,j) => {
      if ('ingredient' in b.data) {
        ingredientNodes.push(
          <IngredientNode
            color={color}
            dim={dim}
            a={a}
            b={b}
            j={j}
          />)
        }
      })

    const actionNodes = []

    a.children.forEach((b,j) => {
      if ('action' in b.data) {
        actionNodes.push(
          <Action
            color={color}
            dim={dim}
            a={a}
            b={b}
            j={j}
          />)
        }
      })

    flows.push(
      <g>
        {ingredientNodes}
        {actionNodes}
        {vessel}
      </g>
    )
  })


  return (
      <g transform={`translate(${0}, ${50})`}>
        {flows}
      </g>
  );
};

export default Plot;

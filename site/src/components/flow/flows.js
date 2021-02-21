import React, { useRef } from 'react';
import { select, max, sum,  hierarchy, linkHorizontal } from 'd3';
import { scaleLinear } from 'd3-scale';

import Vessel from './vessel/vessel.js';
import IngredientNode from './ingredients/ingredientNode.js';
import VesselPreAction from './actions/vesselPreAction.js';
import VesselPostAction from './actions/vesselPostAction.js';


const Flows = ({recipe, width, height, color, dim, focusG, setFocusG}) => {
  const focusRef = useRef();

  const canvasWidth = width - 2*dim.main.padding;
  const canvasHeight = height - 2*dim.main.padding;

  var root = hierarchy(recipe);

  const desc = (a) => a.descendants()

  root = root.each(d => { d.vesselSiblings = (d.parent ? d.parent.children.filter(a => ("vessel" in a.data)) : 'none' )})

  const splits = (a) => {
    var sp = a.split(' ')
    return sp.length
  }

  root = root.each(d => (d.height == root.height) ? d.posHeight = dim.serve.height :
  ('vessel' in d.data) ?
    d.posHeight = ( dim.vessel.shape.label ) + ( (d.data.preactions.length + d.data.postactions.length) * ((dim.vessel.action.radius + dim.vessel.action.margin)*2)) +
    ( d.children.filter(a => ("ingredient" in a.data)).length * ((dim.ingredient.strokeWidth) + (2*dim.ingredient.nodeMargin) + dim.ingredient.nodeHeight) ) +
    ( 2 * dim.vessel.shape.paddingHeight ) + (dim.vessel.shape.textHeight * splits(d.data.vessel))
  : null)


  const nodePosX = (a) => {
    return a.posX + (dim.ingredient.marginLeft + a.data.order * dim.ingredient.offset)
  }

  const nodePosY = (a) => {
    var labels = a.parent.data.vessel.split(' ');
    var labelLength = labels.length
    return a.posY + (dim.ingredient.nodeHeight*.5) + ((a.data.order) * ((dim.ingredient.strokeWidth) + dim.ingredient.nodeHeight + (2*dim.ingredient.nodeMargin))) +
    (dim.vessel.shape.textHeight * labelLength) +
    (a.parent.data.preactions.length * 2 * (dim.vessel.action.radius + dim.vessel.action.margin)) +
    (dim.vessel.shape.label)
  }


  root = root.each(function(d){
    if (d.height == root.height){
      var posYAdd = []
      var descend = desc(d)
      descend.shift()
      descend.forEach(a => ('vessel' in d.data) ? posYAdd.push(a.posHeight) : null)
      d.posY = sum(posYAdd)
    }
    else if ('vessel' in d.data) {
      var posYAdd = []
      var descend = desc(d)
      descend.shift()
      descend.forEach(a => ('vessel' in a.data) ? posYAdd.push(a.posHeight) : null)
      d.vesselSiblings.forEach(b => (b.data.order < d.data.order) ? posYAdd.push(b.posHeight) : null)
      posYAdd.push((posYAdd.length)*(dim.vessel.shape.marginHeight))
      d.posY = sum(posYAdd)
      d.posX = (dim.vessel.shape.width*.5) + ((posYAdd.length-1) * (dim.vessel.shape.width + (dim.vessel.shape.marginWidth*2)))
    } else if ('ingredient' in d.data) {
      d.posY = d.parent.posY
      d.posX = d.parent.posX
    }
  })



  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////


  var descends = root.descendants().filter(d =>'vessel' in d.data).sort((a, b) => a.data.order - b.data.order )
  descends = descends.filter(d => (d.height !== root.height))

  var flows = []

  descends.forEach((a,i) => {

    var labelText = a.data.vessel.split(' ');
    var labelSplit = []

    const vessel = []
    vessel.push(
      <Vessel
        a={a}
        i={i}
        dim={dim}
        color={color}
        setFocusG={setFocusG}
      />
    )

    const vesselPreActionShape = []
      a.data.preactions.forEach( (b,j) => {
        vesselPreActionShape.push(
            <VesselPreAction
              color={color}
              dim={dim}
              a={a}
              b={b}
              j={j}
              focusG={focusG}
              setFocusG={setFocusG}
              labelText={labelText}
            />
        )
      }
    )

    const vesselPostActionShape = []
      a.data.postactions.forEach( (b,j) => {
        vesselPostActionShape.push(
          <VesselPostAction
            color={color}
            dim={dim}
            a={a}
            b={b}
            j={j}
            focusG={focusG}
            setFocusG={setFocusG}
            labelText={labelText}
          />
        )
      }
    )

    const ingredientNodes = []
    a.children.forEach((b,j) => {
      ('ingredient' in b.data) ?
        ingredientNodes.push(
          <IngredientNode
            color={color}
            dim={dim}
            nodePosX={nodePosX}
            nodePosY={nodePosY}
            a={a}
            b={b}
            j={j}
            focusG={focusG}
            setFocusG={setFocusG}
          />
        ) : console.log('')
    }
  )
    flows.push(
      <>
        {vessel}
        {vesselPreActionShape}
        {ingredientNodes}
        {vesselPostActionShape}
      </>
    )
  })

  return (
      <g
        className={'steps'}
        transform={`translate(${dim.main.padding}, ${dim.main.padding})`}
        >
        <defs>
          <filter id="blur" x="0" y="0">
            <feGaussianBlur in="SourceGraphic" stdDeviation=".25" />
          </filter>
          <filter id="shadow" x="0" y="0" width="200%" height="200%">
            <feOffset result="offOut" in="SourceAlpha" dx=".1" dy=".1" />
            <feGaussianBlur result="blurOut" in="offOut" stdDeviation=".1" />
            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
          </filter>
          <filter id='gradient'>
            <radialGradient>
              <stop offset='0%' stopColor='#EFD6FF'/>
              <stop offset='50%' stopColor='#EFD6FF'/>
            </radialGradient>
          </filter>
        </defs>

        {flows}
      </g>
  );
};

export default Flows;

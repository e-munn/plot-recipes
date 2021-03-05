import React, { useRef, useState, useEffect } from 'react';
import { select, ascending, transition, easeCubicIn, easeCubicOut } from 'd3';

import Vessel from './vessels/vessels.js';
import IngredientNode from './ingredients/ingredientNode.js';
import Action from './actions/actions.js';
import Plate from './plate/plate.js';

import color from '../../media/theme/colors.json';
import dim from '../../media/theme/dim.json';

const Plot = ({ recipe, preheat }) => {

  const [focus, setFocus] = useState(false);
  const prevFocus = useRef(false);

  useEffect(() => {

    if(!(focus == false)){

        var cur = select(focus[0].parentElement)
        var all = select(focus[0].parentElement.parentElement).selectAll('g')

        var t1 = transition()
          .duration(180)
          .ease(easeCubicOut)
        var t2 = transition()
          .duration(1000)
          .ease(easeCubicIn)

        all
          // .attr('filter', 'url(#blur)')
          .attr('opacity', .5)

        cur
          .attr('filter', 'none')
          .attr('opacity', 1)

        var textColor
        if(cur.attr('class') == 'ingredient'){
          var cX = cur.select('circle').attr('cx')
          var cY = cur.select('circle').attr('cy')
          var curX = +cX + 10
          var curY = +cY
          textColor = color.blue2

        } else if(cur.attr('class') == 'action'){
          var cX = cur.select('rect').attr('x')
          var cY = cur.select('rect').attr('y')
          var curX = +cX + 10 + dim.i.radius
          var curY = +cY + 8
          textColor = color.orange2

        }

        cur.select('.existing')
          .attr('visibility', 'hidden')



        var amt = cur.append('text')
          .classed('focus', 1)
          .classed('plot-text', 1)
          .classed('weight-2', 1)
          .attr('x', curX)
          .attr('y', curY)
          .attr('fill', textColor)
          .attr('font-size', dim.i.font.detailSize)
          .attr('alignment-baseline', 'middle')
          .text( focus[1].data.detail )

        var svgWidth = focus[0].parentElement.parentElement.parentElement
        svgWidth = select(svgWidth).attr('width')
        var svgHeight = focus[0].parentElement.parentElement.parentElement
        svgHeight = select(svgHeight).attr('height')


        console.log(cur)


        var clickOn = focus[0].parentElement

        var svgT = clickOn.parentElement.parentElement

        svgT = select(svgT)

        clickOn = select(clickOn)

        var clickoff = clickOn.append('rect')
          .classed('focus', 1)
          .attr('x', -dim.m.margin.left/2)
          .attr('y', 0)
          .attr('width', '100vw')
          .attr('height', +svgHeight)
          .attr('fill', 'transparent')
          .attr('opacity', 1)
          .on('click', () => {
            cur.selectAll('.focus').remove()
            all
              .attr('filter', 'none')
              .attr('opacity', 1)
          })

        clickOn.lower()

        amt.raise()

        if (!(prevFocus.current == false)){
          var prev = prevFocus.current
          prev = prev[0]
          prev = prev.parentElement
          prev = select(prev)
          prev.select('.existing').attr('visibility', 'visible')

          var rem = prev.selectAll('.focus')
          rem.remove()
        }
        prevFocus.current = focus

      }
    }, [focus])





  var root = recipe


  var plate=[(
    <Plate
      root={root}
    />
  )]


  var allVessels = root.descendants().filter(d => ('vessel' in d.data)).filter(d => (d.depth !== 0)).sort((a,b) => {return ascending(a.data.stepOrder, b.data.stepOrder)} )

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
            focus={focus}
            setFocus={setFocus}
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
            focus={focus}
            setFocus={setFocus}
          />)
        }
      })

    const preheatImage = []

    if(preheat !== null){


    }



    flows.push(
      <>
        {vessel}
        {actionNodes}
        {ingredientNodes}
        {plate}
      </>
    )
  })

  return (
      <g
        transform={`translate(${0}, ${40})`}
        >
        <defs>
          <filter id="blur" x="-0.08" y="0">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
            <feOffset dx="0" dy="0" />
          </filter>
          <filter id="shadow" x="0" y="0" width="200%" height="200%">
            <feOffset result="offOut" in="SourceAlpha" dx=".1" dy=".1" />
            <feGaussianBlur result="blurOut" in="offOut" stdDeviation=".1" />
            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
          </filter>
        </defs>
        {flows}
      </g>
  );
};

export default Plot;

import React, { useState, useEffect, useRef } from "react";
import '../../App.css';
import Flows from './flows.js';
import { select, easeSin, easeCubicIn, easeCubicOut, transition } from 'd3';
import color from '../../media/theme/colors.json';
import dim from '../../media/theme/dim.json';
import arrowup from '../../media/ui-symbols/arrowup.svg';
import arrowdown from '../../media/ui-symbols/arrowdown.svg';




const FlowMaster = ({ recipe }) => {


  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
    setWindowHeight(window.innerHeight)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  },[])

  const old = select('.steps')
  const start = select('.steps').select('g')


  const [focusG, setFocusG] = useState(false)

  const prevFocus = useRef('');

  useEffect(() => {

    if (!(focusG == false)){


      var t1 = transition()
        .duration(220)
        .ease(easeCubicOut)
      var t2 = transition()
        .duration(1000)
        .ease(easeCubicIn)

      var cur = select(focusG)
      var others = select(focusG.parentElement).selectAll('g')

      // console.log(cur)
      // var detail = cur.append('g')
      // detail.append('text')
      //   .text('hello')
      //   .attr('x', focusG.posX)
      //   .attr('y', focusG.posY)

      others
        .attr('filter', 'url(#blur)')
        .attr('opacity', .4)

      cur
        .attr('filter', 'none')
        .attr('opacity', 1)

      if(cur.attr('class') == 'vessel') {
        cur.select('.vesselShape')
          .transition(t1)
          .attr('stroke-width', dim.vessel.shape.stroke + 2)
        cur.selectAll('g')
          .transition(t1)
          .attr('opacity', 1)
        cur.selectAll('text')
          .transition(t1)
          .attr('font-size', dim.vessel.shape.textSize + 5)
      }


      if(cur.attr('class') == 'ingredient') {
        cur.select('path')
          .transition(t1)
          .attr('stroke-width', 5)
        cur.select('rect')
          .transition(t1)
          .attr('stroke-width', 4)
        cur.select('.name')
          .transition(t1)
          .attr('font-size', dim.ingredient.textSize + 2 )
        cur.select('.amount')
          .transition(t1)
          .attr('font-size', dim.ingredient.amountSize+1)
      }


      if(cur.attr('class') == 'action') {
        var imageX = cur.select('image').attr('x')
        var imageY = cur.select('image').attr('y')
        cur.select('image')
          .transition(t1)
          .attr('height', dim.vessel.action.radius + 12)
          .attr('x', imageX - 6)
          .attr('y', imageY - 6)
      }

      if (!(prevFocus.current == false)){
        var prev = select(prevFocus.current)

        if (prev.attr('class') == 'vessel'){
          prev.select('.vesselShape')
            .attr('stroke-width', dim.vessel.shape.stroke)
          prev.selectAll('text')
            .attr('font-size', dim.vessel.shape.textSize)
        }

        if (prev.attr('class') == 'action'){
          var imageX2 = prev.select('image').attr('x')
          var imageY2 = prev.select('image').attr('y')
          prev.select('text')
            .attr('font-size', dim.ingredient.textSize)
          prev.select('image')
            .transition(t1)
            .attr('height', dim.vessel.action.radius)
            .attr('x', + (imageX2) + 6)
            .attr('y', + (imageY2) + 6)
        }

        if (prev.attr('class') == 'ingredient'){
          prev.select('path')
            .attr('stroke-width', dim.ingredient.nodeStroke)
          prev.select('rect')
            .attr('stroke-width', dim.ingredient.strokeWidth)
          prev.select('.name')
            .attr('font-size', dim.ingredient.textSize)
          prev.select('.amount')
            .attr('font-size', dim.ingredient.amountSize)
        }





      }
      prevFocus.current = focusG
    }
  }, [focusG])


  const tempHeight = 1200
  return (
    <div>


      <svg width={windowWidth} height={tempHeight}>
          {/* <image href={whisk} height="200" width="200"/> */}

          <g>
            <image
              href={arrowup}
              width={50}
              x={windowWidth - 100}
              y={0}
              onClick={ () => {
                  setFocusG(focusG.previousElementSibling)
                }
              }
              >
            </image>
            <image
              href={arrowdown}
              width={50}
              x={windowWidth - 100}
              y={100}
              onClick={ () => {
                  setFocusG(focusG.nextElementSibling)
                }
              }
              >
            </image>

          </g>
        <Flows
          recipe={recipe}
          width={windowWidth}
          height={tempHeight}
          color={color}
          dim={dim}
          focusG={focusG}
          setFocusG={setFocusG}
        />

      </svg>
    </div>
  );
};

export default FlowMaster;

import React, { useState } from "react";
import { scaleOrdinal } from 'd3'
import '../css/cards.css'

import creamy from '../media/images/creamy-white-bean-soup-with-spicy-paprika-oil.png'
import hearty from '../media/images/hearty-whole-wheat-pasta-with-brussels-sprouts-cheese-and-potato.png'
import sweet from '../media/images/sweet-potatoes-with-cilantro-chiles-sauce.png'
import tourte from '../media/images/tourte-aux-pommes-de-terre.png'


const Card = ({d, i}) => {


  const imageMap = scaleOrdinal()
    .domain(['creamy-white-bean-soup-with-spicy-paprika-oil', 'hearty-whole-wheat-pasta-with-brussels-sprouts-cheese-and-potato', 'sweet-potatoes-with-cilantro-chiles-sauce', 'tourte-aux-pommes-de-terre'])
    .range([creamy,hearty,sweet, tourte])

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)

  return (
    <div
      className={'card-holder'}
      >
    <div
      className={'card'}
      style={{
        backgroundImage: `url(${( imageMap(d.path) )})`
      }}
      >
      <div className={'card-cover'}>
          <div
          className={ 'card-title' }
          >
            {d.name}
        </div>
      </div>
    </div>
  </div>

  )
}

export default Card

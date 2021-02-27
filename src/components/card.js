import React, { useState } from "react";
import { scaleOrdinal } from 'd3'

import '../css/cards.css'

import creamy from '../media/images/creamy-white-bean-soup-with-spicy-paprika-oil.jpg'
import hearty from '../media/images/hearty-whole-wheat-pasta-with-brussels-sprouts-cheese-and-potato.jpg'
import sweet from '../media/images/sweet-potatoes-with-cilantro-chiles-sauce.jpg'


const Card = ({d, i}) => {

  const imageMap = scaleOrdinal()
    .domain(['creamy-white-bean-soup-with-spicy-paprika-oil', 'hearty-whole-wheat-pasta-with-brussels-sprouts-cheese-and-potato', 'sweet-potatoes-with-cilantro-chiles-sauce'])
    .range([creamy,hearty,sweet])

  console.log(d)

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)

  var url = '../media/images/' + d.path + '.jpg'

  return (
    <div
      className={'card'}
      style={{
        backgroundImage: `url(${imageMap(d.path)})`
      }}
      >
      <div className={'card-cover'}>
          <div
          className={'card-title'}
          >
            {d.name}
        </div>
      </div>
    </div>
  )
}

export default Card

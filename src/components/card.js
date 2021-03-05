import React, { useState } from "react";
import { scaleOrdinal } from 'd3'
import '../css/cards.css'
import creamy from '../media/images/creamy-white-bean-soup-with-spicy-paprika-oil.jpg'
import hearty from '../media/images/hearty-whole-wheat-pasta-with-brussels-sprouts-cheese-and-potato.jpg'
import sweet from '../media/images/sweet-potatoes-with-cilantro-chiles-sauce.jpg'
import plate1 from '../media/images/plate1.png'



const Card = ({d, i}) => {

  const imageMap = scaleOrdinal()
    .domain(['creamy-white-bean-soup-with-spicy-paprika-oil', 'hearty-whole-wheat-pasta-with-brussels-sprouts-cheese-and-potato', 'sweet-potatoes-with-cilantro-chiles-sauce'])
    .range([creamy,hearty,sweet])

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)
  // var url = '../media/images/' + d.path + '.jpg'
  // var url = '../media/images/creamy-white-bean-soup-with-spicy-paprika-oil.jpg'

  return (
    <div
      className={'card-holder'}
      >
    <div
      className={'card'}
      style={{
        backgroundImage: `url(${(plate1)})`
        // backgroundImage: `url(${ url })`
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

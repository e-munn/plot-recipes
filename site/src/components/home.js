import React, { useState } from "react";

import {
 BrowserRouter as Router,
 Link
} from "react-router-dom";
import recipe_master from '../media/recipes/recipe_master.json';
import Card from './card.js';
import '../css/cards.css'

const Home = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  // const pathify = (a) => {
  //   a = a.toLowerCase();
  //   a = a.replaceAll(' ', '-')
  //   a = a.replaceAll('-', '-')
  //   return a
  // }

  return (
    <>
      <div
        className={'cardbox'}
        >
        {
          recipe_master.map((d, i) =>
                <Link
                  to={'/' + d.path}
                  >
                    <Card
                      d={d}
                      i={i}
                    />

                </Link>
            )
          }
      </div>
    </>

  )
}

export default Home

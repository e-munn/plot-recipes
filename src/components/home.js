import React, { useState, useEffect } from "react";

import {
 BrowserRouter as Router,
 Link
} from "react-router-dom";
import recipe_master from '../media/recipes/recipe_master.json';
import Card from './card.js';
import '../css/cards.css';


const Home = () => {



  return (
    <>
      <div
        className={'cardbox'}
        >
          {recipe_master.map((d, i) =>
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

import React from "react";

import {
 BrowserRouter as Router,
 Link
} from "react-router-dom";

import recipe_master from '../media/recipes/recipe_master.json';

const Nav = ({color}) => {

  return (
    <>
      <nav>
        {
          recipe_master.map(d =>
            (<div>
              <Link
                to={'/' + d.path}
                >
                  {d.name}
              </Link>
            </div>)
          )
        }
      </nav>
    </>

  )
}

export default Nav

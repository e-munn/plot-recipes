import React, { useState, useEffect} from "react";
import './App.css';
import PageMaster from './components/pageMaster.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/home.js';
import recipe_master from './media/recipes/recipe_master.json';
import ScrollToTop from './components/scrolltotop.js';
import dim from './media/theme/dim.json';



const App = () => {

  const tempWidth = window.innerWidth

  const mobile = (tempWidth < dim.m.cutoff) ? 1 : 0;

  const [aWidth, setaWidth] = useState([mobile, tempWidth])

  return (
    <>
      <Router>
        <ScrollToTop />
          <Switch>
            <Route exact path={'/'}>
              <Home
              />
            </Route>
              {recipe_master.map(d => (
                <Route path={ '/' + d.path}>
                  <PageMaster
                    recipe={d}
                    aWidth={aWidth}

                  />
                </Route>
                ))
              }
            </Switch>
        </Router>
    </>
  );
};

export default App;

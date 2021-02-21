import React, { useState, useEffect, useRef } from "react";
import './App.css';
import FlowMaster from './components/flow/flowMaster.js';
import { select, easeSin, easeCubicIn, easeCubicOut, transition, map } from 'd3';
import dim from './media/theme/dim.json';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Nav from './components/nav.js';

import recipe_master from './media/recipes/recipe_master.json';


const App = props => {

  const recipes = recipe_master.map(d => (
      <Route path={ '/' + d.path}>
        <FlowMaster
          recipe={d}
        />
      </Route>
    )
  )


  return (
    <Router>
      <div>
      <Nav/>
        <Switch>
          {recipes}
        </Switch>
      </div>
    </Router>
  );
};

export default App;

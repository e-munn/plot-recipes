import React from "react";
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



const App = props => {

  const recipes = recipe_master.map(d => (
      <Route path={ '/' + d.path}>
        <PageMaster
          recipe={d}
        />
      </Route>
    )
  )


  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={'/'}>
            <Home/>
          </Route>
          {recipes}
        </Switch>
      </div>
    </Router>
  );
};

export default App;

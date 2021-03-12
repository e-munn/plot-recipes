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


import Amplify, { DataStore, Predicates } from "aws-amplify";
import { RECIPES } from "./models";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);



const App = () => {

  
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);

      try {
        var response = await DataStore.query(RECIPES)
        response = JSON.stringify(response, null, 2)
        response = JSON.parse(response)
        response = response.map(d => JSON.parse(d.recipe))
        setData(response);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData()
  }, []);



// console.log(data)
// console.log('-------------')


  return (
    <>
    {isLoading ? (<div>Loading ...</div>) : (
      <Router>
        <ScrollToTop />
          <Switch>
            <Route exact path={'/'}>
              <Home/>
            </Route>
              {recipe_master.map(d => (
                <Route path={ '/' + d.path}>
                  <PageMaster
                    recipe={d}
                  />
                </Route>
                ))
              }

            </Switch>
        </Router>
        )
      }
    </>
  );
};

export default App;

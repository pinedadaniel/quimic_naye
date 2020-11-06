
import './App.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Splash from './containers/splash/index';
import Home from './containers/home/index';

function App() {
  return (
      <Router>
          <Switch>
            <Route exact path="/">
              <Splash/>
            </Route>
            <Route exact path="/home">
              <Home/>
            </Route>
          </Switch>
      </Router>
  );
}

export default App;

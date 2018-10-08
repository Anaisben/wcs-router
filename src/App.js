import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from "./components/Home";
import History from "./components/History";
import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation /> 
          <Switch>
            <Route path="/home" component={Home} exact/>
            <Route path="/notre-histoire" component={History}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }  
}

export default App;

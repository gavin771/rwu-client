import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// COMPONENTS
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home}></Route>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
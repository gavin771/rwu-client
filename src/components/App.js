import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// COMPONENTS
import Home from "./home";
import Login from "./login";
import Register from "./register";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
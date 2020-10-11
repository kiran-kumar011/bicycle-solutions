import React from 'react';
import { Router } from '@reach/router';

import Home from './containers/home/homeContainer';
import Services from './containers/services';

import './App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Home path="/" />
        <Services path="/services" />
      </Router>
    );
  }
}

export default App;

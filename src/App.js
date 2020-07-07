import React from 'react';
import { Router } from '@reach/router';

import './App.scss';

// views
import Header from './containers/NavBar';
import Home from './containers/Home';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="hero" />
        <header>
          <Header setHeader={this.handleNavItemAndScroll} />
        </header>
        <Router>
          <Home path="/" />
        </Router>
      </div>
    );
  }
}

export default App;

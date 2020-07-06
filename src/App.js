import React from 'react';
import { Router } from '@reach/router';
import './App.scss';

// views
import Header from './containers/NavBar';
import Home from './containers/Home';

function App() {
  return (
    <div>
      <div className="hero" />
      <header>
        <Header />
      </header>
      <Router>
        <Home path="/" />
      </Router>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import Home from './components/Home';
import Nav from './components/partials/Nav';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="mainContainer">
      <Nav />
      <Home />
      </div>
    );
  }
}

export default App;

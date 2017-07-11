import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.heading = {
      txt: 'Main Page'
    }
  }
  update(e)
  {
    this.setHeading({heading: e.target.value})
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.heading.txt}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <br/>
          Made with <Heart/>
        </p>
      </div>
    );
  }
}

class Heart extends Component {
  render() {
    return(
        <span>&hearts;</span>
    );
  }
}

export default App;

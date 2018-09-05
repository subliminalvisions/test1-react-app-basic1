import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


// edit file and save - testing
// ooohhh i can just start editing the code right here ... yey ... 
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <hr/>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to The Basic React Test App</h1>
          <hr/>
        </header>
        <p className="App-intro">
          To get started coding, edit the code in <code>src/App.js</code>, modify and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

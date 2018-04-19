import React, { Component } from 'react';
import './App.css';
import Routes from './routes'
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes/>
      </div>
    );
  }
}

export default App;

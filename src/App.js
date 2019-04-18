import React, { Component } from 'react'
import Header from './components/Header'
import DisplayPetitions from './components/DisplayPetitions'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <DisplayPetitions />
      </div>
    );
  }
}

export default App;

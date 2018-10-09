import React, { Component } from 'react';

import './App.css';
import IntroScreen from '../IntroScreen/IntroScreen.js'
import CardContainer from './CardContainer/CardContainer.js'


class App extends Component {



  componentDidMount(){

  }


  render() {
    return (
      <div className="App">
      <IntroScreen/>
      <CardContainer />

      </div>
    );
  }
}

export default App;

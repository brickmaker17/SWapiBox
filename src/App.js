import React, { Component } from 'react';

import './App.css';
import IntroScreen from './IntroScreen/IntroScreen.js';
import CardContainer from './CardContainer/CardContainer.js';
import helper from './Helper/Helper';


class App extends Component {
  constructor() {
    super();
    this.data = new helper();
    this.state = {
      people: [],
      vehicles: [],
      planets: [],
      films: []
    }
  }



  componentDidMount(){
    
  }


  render() {
    const { films } = this.state
    return (
      <div className="App">
        App
        <IntroScreen films={ films }/>
        <CardContainer />
      </div>
    );
  }
}

export default App;

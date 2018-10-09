import React, { Component } from 'react';

import './App.css';
import IntroScreen from './IntroScreen/IntroScreen.js';
import CardContainer from './CardContainer/CardContainer.js';
// import Helper from './Helper/Helper';
import Button from './Button/Button';

const getData = require ('./Helper/Helper').getData

class App extends Component {
  constructor() {
    super();
    this.data = {};
    this.state = {
      people: [],
      vehicles: [],
      planets: [],
      films: [],
      currentFilm: {}
    }
  }

  componentDidMount(){
    getData()
    .then(film => this.setState({
      currentFilm: film
    }))
  }

  render() {
    const { currentFilm } = this.state
    return (
      <div className="App">
        {/* App */}
        <IntroScreen crawl={currentFilm.opening_crawl}/>
        <div className="button-container">
          <Button purpose="People" />
          <Button purpose="Planet" />
          <Button purpose="Vehicle" />
          <Button purpose="Favorites" />
        </div>
        <CardContainer />
      </div>
    );
  }
}

export default App;

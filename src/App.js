import React, { Component } from 'react';

import bb8 from './images/bb8.svg';
import deathstar from './images/deathstar.svg';
import rebel from './images/rebel.svg';
import falconImg from './images/falcon.svg';

import './App.css';
import IntroScreen from './IntroScreen/IntroScreen.js';
import CardContainer from './CardContainer/CardContainer.js';
import Button from './Button/Button';

const getData = require ('./Helper/Helper').getData
const getPeople = require('./Helper/Helper').getPeople
const getPlanets = require('./Helper/Helper').getPlanets
const getVehicles = require('./Helper/Helper').getVehicles

class App extends Component {
  constructor() {
    super();
    this.data = {};
    this.state = {
      people: [],
      vehicles: [],
      planets: [],
      films: [],
      currentFilm: {},
      display: []
    }
  }

  componentDidMount() {
    getData()
      .then(data => this.setState({currentFilm: data}))
    getPeople()
      .then(data => this.setState({people: data}))
    getPlanets()
      .then(data => this.setState({planets: data }))
    getVehicles()
      .then(data => this.setState({vehicles: data}))
  }


  setButtonName = (btnName) => {

  }

  render() {
    const { currentFilm, people, planets, vehicles, display} = this.state
    return (
      <div className="App">
        <IntroScreen 
          crawl={currentFilm.opening_crawl}
          title={currentFilm.title}
          year={currentFilm.release_date}
        />
        <div className="button-container">
          <Button purpose="People" image={bb8}/>
          <Button purpose="Planet" image={deathstar}/>
          <Button purpose="Vehicle" image={falconImg}/>
          <Button purpose="Favorites" image={rebel}/>
        </div>
        <CardContainer people={ people} planets={ planets } vehicles={ vehicles } display={ display } />
      </div>
    );
  }
}

export default App;

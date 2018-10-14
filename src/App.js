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
      display: '',
      displayName: ['People', 'Planets', 'Vehicles', '']
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
    this.setState({ display: btnName })
  }

  render() {
    const { currentFilm, people, planets, vehicles, display, displayName } = this.state
    return (
      <div className="App">
        <IntroScreen 
          crawl={currentFilm.opening_crawl}
          title={currentFilm.title}
          year={currentFilm.release_date}
        />
        <div className="button-container">
          <Button setButtonName={ this.setButtonName } purpose="People" image={bb8}/>
          <Button setButtonName={ this.setButtonName } purpose="Planet" image={deathstar}/>
          <Button setButtonName={ this.setButtonName } purpose="Vehicle" image={falconImg}/>
          <Button setButtonName={ this.setButtonName } purpose="Favorites" image={rebel}/>
        </div>
        <CardContainer displayName={ displayName } people={ people} planets={ planets } vehicles={ vehicles } display={ display } />
      </div>
    );
  }
}

export default App;

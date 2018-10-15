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
      empty: [],
      currentFilm: {},
      display: 'empty',
      favorites: [],
      favoritesActive: false,
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

  showFavorites = () => {
    this.setState({
      favoritesActive: !this.state.favoritesActive
    })
  }

  addFavorite = (selectedCard) => {
    if (this.state.favorites.includes(selectedCard)) {
    } else {
        this.setState({
          favorites: [...this.state.favorites, selectedCard]
        })

    }
  }

  render() {
    const { currentFilm, display } = this.state;
    return (
      <div className="App">
        <IntroScreen 
          crawl={currentFilm.opening_crawl}
          title={currentFilm.title}
          year={currentFilm.release_date}
        />
        <div className="button-container">
          <Button purpose="people" image={bb8} setButtonName={ this.setButtonName }/>
          <Button purpose="planets" image={deathstar} setButtonName={ this.setButtonName }/>
          <Button purpose="vehicles" image={falconImg} setButtonName={ this.setButtonName }/>
          <Button purpose="favorites" image={rebel} onClick={this.showFavorites} setButtonName={ this.setButtonName } />
        </div>
        {this.state.favoritesActive ?
          <CardContainer matching={this.state[display]} addFavorite={this.addFavorite} characters={this.state.favorites} /> :
          <CardContainer matching={this.state[display]} addFavorite={this.addFavorite} characters={this.state.people} />
        }
      </div>
    );
  }
}

export default App;

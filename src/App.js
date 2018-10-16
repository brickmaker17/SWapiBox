import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import bb8 from './images/bb8.svg';
import deathstar from './images/deathstar.svg';
import rebel from './images/rebel.svg';
import falconImg from './images/falcon.svg';

import './App.css';
import IntroScreen from './IntroScreen/IntroScreen.js';
import CardContainer from './CardContainer/CardContainer.js';
import Button from './Button/Button';
import { throws } from 'assert';

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
      intro: true,
    }
  }

  componentDidMount(){
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

  closeIntro = () => {
    this.setState({
      intro: false
    })

  }

  render() {
    const { currentFilm, display } = this.state;

    return (
      <div className="App">

        { this.state.intro &&
          <Route exact path="/" render={() => {
            return (
              <IntroScreen 
                crawl={currentFilm.opening_crawl}
                title={currentFilm.title}
                year={currentFilm.release_date}
                closeIntro={this.closeIntro}
              />
            )
          }} />
        }

        { !this.state.intro &&
          <Route path="/" render={() => {
            return (
              <div>


                <div className="button-container">
                  <NavLink className="nav-link" to="/people">
                    <Button purpose="people" image={bb8} setButtonName={this.setButtonName} />
                  </NavLink>
                  <NavLink className="nav-link" to="/planets">
                    <Button purpose="planets" image={deathstar} setButtonName={this.setButtonName} />
                  </NavLink>
                  <NavLink className="nav-link" to="/vehicles">
                    <Button purpose="vehicles" image={falconImg} setButtonName={this.setButtonName} />
                  </NavLink>
                  <NavLink className="nav-link" to="/favorites">
                    <Button purpose="favorites" image={rebel} onClick={this.showFavorites} setButtonName={this.setButtonName} />
                  </NavLink>
                </div>
                <Route path="/people" render={() => {
                  return (<CardContainer
                    matching={this.state.people}
                    addFavorite={this.addFavorite}
                    characters={this.state.favorites}
                  />)
                }}
                />
                <Route path="/planets" render={() => {
                  return (<CardContainer
                    matching={this.state.planets}
                    addFavorite={this.addFavorite}
                    characters={this.state.favorites}
                  />)
                }}
                />
                <Route path="/vehicles" render={() => {
                  return (<CardContainer
                    matching={this.state.vehicles}
                    addFavorite={this.addFavorite}
                    characters={this.state.favorites}
                  />)
                }}
                />
                <Route path="/favorites" render={() => {
                  return (<CardContainer
                    matching={this.state.favorites}
                    addFavorite={this.addFavorite}
                    characters={this.state.favorites}
                  />)
                }}
                />
              </div>
            )
          }} />
        }
      </div>
    )
  }
}

export default App;

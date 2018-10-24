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
import * as API from './Helper/Helper';

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
      favorite: false,
    }
  }

  componentDidMount() {
    API.getData()
      .then(data => this.setState({currentFilm: data}))
    API.getPeople()
      .then(data => this.setState({people: data}))
    API.getPlanets()
      .then(data => this.setState({planets: data }))
    API.getVehicles()
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
    if (!this.state.favorites.includes(selectedCard)) {
      this.setState({
        favorites: [...this.state.favorites, selectedCard]
      })
    } else {
      let updatedFavorites = this.state.favorites.filter(object => {
        return object !== selectedCard
      })
      this.setState({
        favorites: updatedFavorites
      })
    }
  }
  
  componentDidUpdate = () => {
    localStorage.setItem('AppFavorites', JSON.stringify(this.state.favorites))
  }

  closeIntro = () => {
    this.setState({
      intro: false
    })

  }

  render() {
    const { currentFilm, display, favorite } = this.state;
    return (
      <div className="App">

        { this.state.intro &&
          <Route path="/" render={() => {
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
                    <Button 
                      purpose="people" 
                      image={bb8} 
                      setButtonName={this.setButtonName} />
                  </NavLink>
                  <NavLink className="nav-link" to="/planets">
                    <Button 
                      purpose="planets" 
                      image={deathstar} 
                      setButtonName={this.setButtonName} />
                  </NavLink>
                  <NavLink className="nav-link" to="/vehicles">
                    <Button 
                      purpose="vehicles" 
                      image={falconImg} 
                      setButtonName={this.setButtonName} />
                  </NavLink>
                  <NavLink className="nav-link" to="/favorites">
                    <Button 
                      count={this.state.favorites}
                      purpose="favorites" 
                      image={rebel} 
                      onClick={this.showFavorites} 
                      setButtonName={this.setButtonName} />
                  </NavLink>
                </div>
                <Route path="/people" render={() => {
                  return (<CardContainer
                    matching={this.state.people}
                    addFavorite={this.addFavorite}
                    characters={this.state.favorites}
                    favorite={favorite}
                    display={display}
                  />)
                }}
                />
                <Route path="/planets" render={() => {
                  return (<CardContainer
                    matching={this.state.planets}
                    addFavorite={this.addFavorite}
                    characters={this.state.favorites}
                    favorite={favorite}
                    display={display}
                  />)
                }}
                />
                <Route path="/vehicles" render={() => {
                  return (<CardContainer
                    matching={this.state.vehicles}
                    addFavorite={this.addFavorite}
                    characters={this.state.favorites}
                    favorite={favorite}
                    display={display}
                  />)
                }}
                />
                <Route path="/favorites" render={() => {
                  return (<CardContainer
                    matching={this.state.favorites}
                    addFavorite={this.addFavorite}
                    characters={this.state.favorites}
                    favorite={favorite}
                    display={display}
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

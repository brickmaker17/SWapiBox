import React, { Component } from 'react';

import './Card.css';
import PropTypes from 'prop-types';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favorite: false,
      selected: ''
    }
  }


  componentDidMount() {
    this.setState({ selected: this.props.display})
  }



  changeFavorite = () => {
    this.setState({
      favorite: !this.state.favorite
    })
  }

  componentDidUpdate = () => {
    const { Name, population, Species, Homeworld } = this.props.person;
    }


    
    render() {
    const { name, population, species, homeworld } = this.props.people;
    const { planetname, terrain, planetpopulation, climate, residents} = this.props.planets;
    const { vehiclename , model, vehicle_class, passengers } = this.props.vehicles;
    const { selected } = this.state
    const { displayName } = this.props

    if ( selected === displayName[3]) {
      return (
        <div>

        </div>
        <p className="card-species">
          { species }
        </p>
        <p className="card-home">
          <strong>
            home World: 
          </strong>
          { homeworld }
        </p>
        <p className="card-population">
          <strong>
            Population: 
          </strong>
          { population }
        </p>
        <button className="favorite-button" onClick={this.changeFavorite} >Add To Favorites</button>
      </div>
    )
    }

    if ( selected === displayName[0] )  {
      return(
        <div 
        className="person-card"
        name={displayName[0]}
        >
          <div className="card-title">
            <h2 className="card-name">
              { name }
            </h2>
          </div>
          <p className="card-species">
            { species }
          </p>
          <p className="card-home">
            <strong>
              home World: 
            </strong>
            { homeworld }
          </p>
          <p className="card-population">
            <strong>
              Population: 
            </strong>
            { population }
          </p>
          <button className="favorite-button" >Add To Favorites</button>
        </div>
      )
     } else if ( selected === displayName[1]) {
      return(
        <div 
        className="person-card"
        name={displayName[1]}
         >
          <div className="card-title">
            <h2 className="card-name">
              { planetname }
            </h2>
          </div>
          <p className="card-species">
            { terrain }
          </p>
          <p className="card-home">
            <strong>
              Climate: 
            </strong>
            { climate }
          </p>
          <p className="card-population">
            <strong>
              Population: 
            </strong>
            { planetpopulation }
          </p>
          <button className="favorite-button" >Add To Favorites</button>
        </div>
      )
    } else if ( selected === displayName[2]) {
      return(
        <div 
        className="person-card"
        name={displayName[2]}
         >
          <div className="card-title">
            <h2 className="card-name">
              { vehiclename }
            </h2>
          </div>
          <p className="card-species">
            { model }
          </p>
          <p className="card-home">
            <strong>
              Class: 
            </strong>
            { vehicle_class }
          </p>
          <p className="card-population">
            <strong>
              Passengers: 
            </strong>
            { passengers }
          </p>
          <button className="favorite-button" >Add To Favorites</button>
        </div>
      )
    } else {
      return (
        null
    )
    }
  }
}

Card.propTypes = {
  person: PropTypes.object.isRequired,
}

export default Card;
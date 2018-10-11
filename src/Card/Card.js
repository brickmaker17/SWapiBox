import React, { Component } from 'react';

import './Card.css';
import PropTypes from 'prop-types';

class Card extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      population: '',
      species: '',
      homeworld: '',
      favorite: false,
    }
  }

  componentDidUpdate = () => {
    const { Name, Population, Species, Homeworld } = this.props.person;
    }
    
    render() {
    const { Name, population, Species, Homeworld } = this.props.person;
    return(
      <div className="card" >
        <div className="card-title">
          <h2 className="card-name">
            { Name }
          </h2>
        </div>
        <p className="card-species">
          { Species }
        </p>
        <p className="card-home">
          <strong>
            Home World: 
          </strong>
          { Homeworld }
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
  }
}

Card.propTypes = {
  person: PropTypes.object.isRequired,
}

export default Card;
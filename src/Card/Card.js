import React, { Component } from 'react';

import './Card.css';
import PropTypes from 'prop-types';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      population: '',
      species: '',
      homeworld: '',
      favorite: false,
    }
  }

  // componentDidUpdate = () => {
  //   const { name, population, species, homeworld } = this.props.person;
  //   }
    
    render() {
    const { name, population, species, homeworld } = this.props.person;
    return(
      <div className="card" >
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
  }
}

Card.propTypes = {
  person: PropTypes.object.isRequired,
}

export default Card;
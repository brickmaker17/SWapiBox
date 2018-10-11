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
      languages: '',
    }
  }

  componentDidMount = () => {
    const { name, population, species, languages } = this.props.character;
    this.setState({
      name: name,
      population: population,
      species: species,
      languages: languages,

    })
  }

  render() {
    const { name, population, species, languages } = this.state;
    return(
      <div className="card" >
      <div className="card-title">
        <h2 className="card-name">
          { name }
        </h2>
      </div>
      <p className="card-species">
        Human
        {/* { species } */}
      </p>
      <p className="card-home">
        <strong>
          Home World: 
        </strong>
        {/* Tatooine */}
      </p>
      <p className="card-population">
        <strong>
          Population: 
        </strong>
        {/* 200,000 */}
      </p>
      <p className="card-languages">
        <strong>
          Languages: 
        </strong>
        { languages }
      </p>

      </div>
    )
  }
}

Card.PropTypes = {
  character: PropTypes.object.isRequired,
}

export default Card;
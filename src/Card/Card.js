import React, { Component } from 'react';

import './Card.css';

class Card extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

  render() {
    return(
      <div className="card" >
      <div className="card-title">
        <h2 className="card-name">
          Luke Skywalker
        </h2>
      </div>
      <p className="card-home">
        <strong>
          Home World: 
        </strong>Tatooine
      </p>
      <p className="card-population">
        <strong>
          Population: 
        </strong>200,000
      </p>
      <p className="card-species">
      <strong>
          Species: 
        </strong>Human
      </p>
      <p className="card-languages">
        <strong>
          Languages: 
        </strong>Galactic Basic
      </p>

      </div>
    )
  }
}

export default Card;
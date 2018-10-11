import React from 'react';

import './CardContainer.css';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const CardContainer = ({ characters }) => {
  const returnCharacters = characters.map(character => {
    return <Card key={Math.random()} person={character} />
  })
  return (
    <div className="card-container" >
      { returnCharacters }
    </div>
  )
}

CardContainer.propTypes = {
  characters: PropTypes.array.isRequired,
}

export default CardContainer;
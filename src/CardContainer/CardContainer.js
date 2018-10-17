import React from 'react';
import { Route } from 'react-router-dom';
import './CardContainer.css';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const CardContainer = ({ matching, addFavorite }) => {
  const returnCharacters = matching.map(character => {
    return <Card key={character.name} addFavorite={addFavorite} cardData={character} />
  })
  return (
    <div className="card-container" >
      { returnCharacters }
    </div>
  )
}

CardContainer.propTypes = {
  characters: PropTypes.array.isRequired,
  addFavorite: PropTypes.func.isRequired,
}

export default CardContainer;
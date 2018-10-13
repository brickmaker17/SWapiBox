import React from 'react';

import './CardContainer.css';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const CardContainer = ({ people, planets, vehicles, display }) => {
  const returnCharacters = people.map(character => {
    return <Card key={Math.random()} people={character} planets={ planets } vehicles={ vehicles} display={ display } />
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
import React from 'react';

import './CardContainer.css';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const CardContainer = ({ people, planets, vehicles, display, displayName }) => {
  const returnCharacters = people.map(character => {
    return <Card 
    key={Math.random()} 
    people={character} 
    planets={ planets } 
    vehicles={ vehicles} 
    display={ display }
    displayName={ displayName } />
  })
  if ( display === 'People' || 'Planet' || 'Vehicle') {
    return (
      <div className="card-container" >
        { returnCharacters }
      </div>
    )
  } else {
    return (
     <div className="card-container">

     </div>
  )
  }
}

CardContainer.propTypes = {
  characters: PropTypes.array.isRequired,
}

export default CardContainer;
import React from 'react';

import './Button.css';
import PropTypes from 'prop-types';

const Button = ({ purpose, image, setButtonName, count }) => {

  const handleClick = (event) => {
    let name = event.target.getAttribute('name');
    setButtonName(name);
  }
  
  const favoritesCount = () => {
    console.log('COUNT: ', count.length)
    if (count.length) {
      return <h2>({count.length})</h2>;
    } else {
      return <h2>(0)</h2>;
    }
  }

  return (
    <div className="button" onClick={handleClick} name={purpose} >
      <img name={purpose} className="favorite-button-icon" alt="img" src={image} />
      <h2 name={purpose} className="button-label" >
        {purpose}
      </h2>
        { favoritesCount }
    </div>
  )
}


Button.propTypes = {
  purpose: PropTypes.string.isRequired,
  count: PropTypes.array,
  // image: PropTypes.
}

export default Button;
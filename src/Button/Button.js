import React from 'react';

import './Button.css';
import PropTypes from 'prop-types';

const Button = ({ purpose, image }) => {
  return (
    <div className="button" >
      <img className="favorite-button-icon" alt="img" src={image} />
      <h2 className="button-label" >
        {purpose}
      </h2>
    </div>
  )
}

Button.propTypes = {
  purpose: PropTypes.string.isRequired,
  // image: PropTypes.
}

export default Button;
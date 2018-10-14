import React from 'react';

import './Button.css';
import PropTypes from 'prop-types';

const Button = ({ purpose, image, setButtonName }) => {

  const handleClick = (event) => {
    let name = event.target.getAttribute('name')
    setButtonName(name);
  }
  return (
    <div className="button"
         onClick={handleClick}
         name={purpose}>
      <img  name={purpose} className="favorite-button-icon" alt="img" src={image} />
      <h2 name={purpose} className="button-label" >
        {purpose}
      </h2>
    </div>
  )
}

Button.propTypes = {
  purpose: PropTypes.string.isRequired,
  SetButtonName: PropTypes.isfunc
  // image: PropTypes.
}

export default Button;
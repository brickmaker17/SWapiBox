import React from 'react';

import './Button.css';
import PropTypes from 'prop-types';

const Button = ({ purpose }) => {
  return (
    <div className="button" >
      {purpose}
    </div>
  )
}

Button.propTypes = {
  purpose: PropTypes.string.isRequired
}

export default Button;
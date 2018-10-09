import React from 'react';

import logo from '../images/SWlogo.png'
import lightsaber from '../images/saber.svg'
import './IntroScreen.css';
import PropTypes from 'prop-types';

const IntroScreen = ( props ) => {
  return (
    <div className="intro-container">
      <img alt="logo" src={logo} className="intro-logo" />
      <div className="intro-screen" id="board" >
        <div id="content">
          <p className="crawl-head" id="subtitle">{props.title}</p>
          <p className="crawl-head" id="title">{props.year}</p>
          <div className="crawl-text">
              {props.crawl}
          </div>
        </div>
      </div>
      <button className="intro-arrow" >
        <img alt="lightsaber" className="lightsaber lightsaber-left" src={lightsaber} />
        <img alt="lightsaber" className="lightsaber lightsaber-right" src={lightsaber} />
      </button>
    </div>
  )
}

IntroScreen.propTypes = {
  crawl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired
}

export default IntroScreen;
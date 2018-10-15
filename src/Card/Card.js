import React, { Component } from 'react';

import './Card.css';
import PropTypes from 'prop-types';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favorite: false,
      selected: '',
    }
  }

  componentDidMount = () => {
    this.setState({
      selected: this.props.display
    })
  }

  changeFavorite = () => {
    this.setState({
      favorite: !this.state.favorite
    })
    this.props.addFavorite(this.props.person)
  }
    
  render() {
    const { cardData } = this.props;
    const keys = Object.keys(this.props.cardData);
    const { name } = this.props.cardData;
    const fillings = keys.map(key => {
      if (key === 'name') {
        return null
      }
      return <li className={key.toLowerCase()} >{`${key}: ${cardData[key]}`}</li>
    })

    return (
      <div className="card" >
        <h2>{ name }</h2>
        <ul>
          {fillings}
        </ul>
      </div>
    )
  }
}

Card.propTypes = {
  cardData: PropTypes.object.isRequired,
  addFavorite: PropTypes.func.isRequired,
}

export default Card;
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
    if (this.state.favorite) {
      localStorage.removeItem(`favoriteItem${this.props.cardData.name}`)
    } else {
      this.props.addFavorite(this.props.cardData)
      localStorage.setItem(`favoriteItem${this.props.cardData.name}`, JSON.stringify(this.props.cardData))
    }
  }
    
  render() {
    const { cardData } = this.props;
    const keys = Object.keys(this.props.cardData);
    const { name } = this.props.cardData;
    const fillings = keys.map(key => {
      if (key === 'name') {
        return null;
      }
      return <li className={key.toLowerCase()} ><strong>{`${key}:`}</strong>{`${cardData[key]}`}</li>
    })

    return (
      <div className="card" >
        <h2>{ name }</h2>
        <ul>
          {fillings}
        </ul>
        <button className="favorite-button" onClick={this.changeFavorite} >
          {!this.state.favorite ?
            "Add To Favorites" :
            "Remove Favorite"
          }
        </button>
      </div>
    )
  }
}

Card.propTypes = {
  cardData: PropTypes.object.isRequired,
  addFavorite: PropTypes.func.isRequired,
}

export default Card;
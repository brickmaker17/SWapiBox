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
    // debugger;
    console.log('FALSE: ', this.state.favorite);
    this.setState({
      favorite: !this.state.favorite
    })
    console.log('TRUE: ', this.state.favorite);
    this.changeFavoriteInParent()
  }

  changeFavoriteInParent = () => {
    console.log(this.props.cardData)
    if (!this.state.favorite) {
      this.props.addFavorite(this.props.cardData)
      // localStorage.setItem(`favoriteItem${this.props.cardData.name}`, JSON.stringify(this.props.cardData))
    } else {
      // localStorage.removeItem(`favoriteItem${this.props.cardData.name}`)
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
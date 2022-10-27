import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    let paragrafo;

    if (cardTrunfo === 'on' || cardTrunfo === true) {
      paragrafo = <p data-testid="trunfo-card">Super Trunfo</p>;
    } else {
      paragrafo = <p> </p>;
    }
    return (
      <div className="div-card">
        <h3 data-testid="name-card">{ cardName }</h3>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <h4 data-testid="description-card">{ cardDescription }</h4>
        <p data-testid="attr1-card">{ cardAttr1 }</p>
        <p data-testid="attr2-card">{ cardAttr2 }</p>
        <p data-testid="attr3-card">{ cardAttr3 }</p>
        <p data-testid="rare-card">{ cardRare }</p>
        <h2>{ paragrafo }</h2>
      </div>
    );
  }
}

Card.propTypes = {
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;

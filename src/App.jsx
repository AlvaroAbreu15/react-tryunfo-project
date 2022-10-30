/* eslint-disable max-lines */
import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    hasTrunfo: false,
    cards: [],
    value: '',
    disabledTrunfo: false,
  };

  onInputChange = (event) => {
    const { name } = event.target;
    const value = event.target.type === 'checkbox' ? event
      .target.checked : event.target.value;
    this.setState({
      [name]: value,
    }, () => {
      const {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        hasTrunfo,
      } = this.state;
      const inputEmpty = (cardName.length > 0) && (cardDescription
        .length > 0) && (cardImage.length > 0) && (cardRare.length > 0);
      const att1 = parseInt(cardAttr1, 10);
      const att2 = parseInt(cardAttr2, 10);
      const att3 = parseInt(cardAttr3, 10);
      const number = 210;
      const maxNumber = 90;
      const greatValue = (att1 <= maxNumber && att1 >= 0) && (att2 <= maxNumber
        && att2 >= 0) && (att3 <= maxNumber && att3 >= 0);
      const sumValue = att1 + att2 + att3 <= number;
      const bool = (inputEmpty && greatValue && sumValue);
      const vdc = hasTrunfo;
      this.setState({
        isSaveButtonDisabled: !bool,
        hasTrunfo: vdc,
      });
    });
  };

  onSaveButtonClick = () => {
    const {
      cardTrunfo,
      hasTrunfo,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    this.setState((prevState) => ({
      cards: [...prevState.cards, {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      }],
    }), () => {
      this.setState({
        cardName: '',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardImage: '',
        cardRare: 'normal',
        isSaveButtonDisabled: false,
        disabledTrunfo: false,
      });
      const combinada = (cardTrunfo === true && hasTrunfo === false);
      if (combinada || !combinada) {
        this.setState({
          cardTrunfo: false,
          hasTrunfo: true,
        });
      } else {
        this.setState({
          cardTrunfo: false,
          hasTrunfo: false,
        });
      }
    });
  };

  deleteItem = (event) => {
    event.target.parentNode.firstChild.remove();
    event.target.remove();
    this.setState({
      hasTrunfo: false,
    });
  };

  filterCards = () => {
    const { value, cards } = this.state;
    const newCardList = cards.filter((card) => card
      .cardName.toLowerCase().includes(value.toLowerCase()));
    this.setState({
      cards: newCardList,
    });
  };

  filterByRarity = () => {
    const { value, cards } = this.state;
    const newCardList = cards.filter((card) => card
      .cardRare.toLowerCase() === value.toLowerCase());
    this.setState({
      cards: newCardList,
    });
  };

  filterByTrunfo = () => {
    const { cards } = this.state;
    console.log(cards);
    const newCardList = cards.filter((card) => card
      .cardTrunfo === true);
    this.setState({
      cards: newCardList,
    });
  };

  changeValueFilter = (event) => {
    const { type } = event.target;
    if (type === 'text') {
      this.setState({ value: event.target.value }, () => this.filterCards());
    } else if (type === 'select-one') {
      const valueOf = event.target.value;
      console.log(event.target.type);
      if (valueOf !== 'todas') {
        return this.setState({ value: event.target.value }, () => this.filterByRarity());
      }
    } else {
      const { hasTrunfo } = this.state;
      if (hasTrunfo === true) {
        this.setState({ value: event.target.value }, () => this.filterByTrunfo());
      }
      this.setState({
        disabledTrunfo: true,
      });
    }
  };

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
      hasTrunfo,
      isSaveButtonDisabled,
      cards,
      value,
      disabledTrunfo,
    } = this.state;
    return (
      <main>
        <div>
          <h1>Tryunfo</h1>
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            onInputChange={ this.onInputChange }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.onSaveButtonClick }
            hasTrunfo={ hasTrunfo }
          />
        </div>
        <div>
          <Card
            onInputChange={ this.onInputChange }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
          <input
            type="text"
            value={ value }
            onChange={ this.changeValueFilter }
            data-testid="name-filter"
            disabled={ disabledTrunfo }
          />
          <select
            name="filterRarity"
            onChange={ this.changeValueFilter }
            data-testid="rare-filter"
            disabled={ disabledTrunfo }
            type="select"
          >
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
          <input
            type="checkbox"
            data-testid="trunfo-filter"
            onChange={ this.changeValueFilter }
          />
        </div>
        <div>
          <p>Cards Salvos</p>
          { cards.map((e) => (
            <div key={ e.name }>
              <Card
                cardName={ e.cardName }
                cardDescription={ e.cardDescription }
                key={ e.cardName }
                cardAttr1={ e.cardAttr1 }
                cardAttr2={ e.cardAttr2 }
                cardAttr3={ e.cardAttr3 }
                cardImage={ cardImage }
                cardRare={ e.cardRare }
                cardTrunfo={ e.cardTrunfo }
              />
              <button
                type="button"
                data-testid="delete-button"
                onClick={ this.deleteItem }
              >
                Excluir
              </button>
            </div>
          )) }
        </div>
      </main>
    );
  }
}

export default App;

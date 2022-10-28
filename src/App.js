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
      console.log(this.state);
      const inputEmpty = (cardName
        .length > 0) && (cardDescription
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
    } = this.state;
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      isSaveButtonDisabled: false,
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
    console.log(cardTrunfo);
    console.log(hasTrunfo);
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
    } = this.state;
    return (
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
      </div>
    );
  }
}

export default App;

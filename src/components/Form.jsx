import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="name-input">
            Nome da Carta
            <input type="text" data-testid="name-input" name="nameCard" />
          </label>
          <label htmlFor="description-input">
            Descrição
            <textarea data-testid="description-input" name="description" />
          </label>
          <label htmlFor="attr1-input">
            Atributo 1
            <input type="number" data-testid="attr1-input" name="attribute1" />
          </label>
          <label htmlFor="attr2-input">
            Atributo 2
            <input type="number" data-testid="attr2-input" name="attribute2" />
          </label>
          <label htmlFor="attr3-input">
            Atributo 3
            <input type="number" data-testid="attr3-input" name="attribute3" />
          </label>
          <label htmlFor="image-input">
            Caminho
            <input type="text" data-testid="image-input" name="image" />
          </label>
          <label htmlFor="rare-input">
            Selecione a raridade
            <select name="selectRarity" data-testid="rare-input">
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfo-input">
            É Super Tryunfo
            <input type="checkbox" data-testid="trunfo-input" />
          </label>
          <button type="button" data-testid="save-button">Salvar</button>
        </form>
      </div>
    );
  }
}

export default Form;

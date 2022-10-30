import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Buttons extends Component {
  render() {
    const {
      value,
      changeValueFilter,
      disabledTrunfo,
    } = this.props;
    return (
      <div>
        <input
          type="text"
          value={ value }
          onChange={ changeValueFilter }
          data-testid="name-filter"
          disabled={ disabledTrunfo }
        />
        <select
          name="filterRarity"
          onChange={ changeValueFilter }
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
          onChange={ changeValueFilter }
        />
      </div>
    );
  }
}

Buttons.propTypes = {
  changeValueFilter: PropTypes.func.isRequired,
  disabledTrunfo: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

export default Buttons;

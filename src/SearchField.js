import React from 'react';
import PropTypes from 'prop-types';

class SearchField extends React.Component {
  render() {
    return (
      <input
        type="text"
        value={this.props.value}
        onChange={this.props.onChange}
        placeholder="Busca una película..." />
    );
  }
}

SearchField.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default SearchField;

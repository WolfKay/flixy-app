import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Input.scss";

class Input extends Component {
  handleInputChange = (event) => {
    this.props.onInputChange(event);
  };

  handleKeyPress = (event) => {
    this.props.onInputKeyPress(event);
  };

  render() {
    const { placeholder } = this.props;
    return (
      <input
        className='search'
        type='text'
        placeholder={placeholder}
        onChange={this.handleInputChange}
        onKeyPress={this.handleKeyPress}
      />
    );
  }
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onInputChange: PropTypes.func,
  onInputKeyPress: PropTypes.func
};

Input.defaultProps = {
  onInputChange: () => {},
  onInputKeyPress: () => {}
};

export default Input;

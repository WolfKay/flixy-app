import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Input.scss";

class Input extends Component {
  getInputValue = (event) => {
    this.props.handleInputChange(event.target.value);
  };
  render() {
    const { placeholder } = this.props;
    return (
      <input
        className='search'
        type='text'
        placeholder={placeholder}
        onChange={this.getInputValue}
      />
    );
  }
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired
};

export default Input;

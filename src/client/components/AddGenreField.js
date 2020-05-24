import React, { Component } from "react";

import Input from "./Input";

class AddGenreField extends Component {
  state = {
    value: ""
  };

  onInputChange = (value) => {
    this.setState({ value });
  };

  render() {
    return (
      <Input
        className='search'
        placeholder='Add genres to your movie'
        handleInputChange={this.onInputChange}
      />
    );
  }
}

export default AddGenreField;

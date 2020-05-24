import React, { Component } from "react";

import Input from "./Input";

class AddMovieField extends Component {
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
        placeholder='Add movies to your watchlist'
        handleInputChange={this.onInputChange}
      />
    );
  }
}

export default AddMovieField;

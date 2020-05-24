import React, { Component } from "react";


class AddMovie extends Component {
  state = {
    value: ""
  };

  onInputChange = (value) => {
    this.setState({ value });
  };

  render() {
    return (
      <div className='create-movie-input'>
        <span className='create-movie-input__title'>Add a movie</span>
        <AddMovieField />
        <AddGenreField />
      </div>
    );
  }
}

export default AddMovie;

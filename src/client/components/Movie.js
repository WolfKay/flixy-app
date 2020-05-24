import React, { Component } from "react";

import "./Movie.scss";

class Movie extends Component {
  render() {
    return (
      <div className='movie-item'>
        <div className='movie-item__title'>Title</div>
        <div className='movie-item__genre'>Genre</div>
      </div>
    );
  }
}

export default Movie;

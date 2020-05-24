import React, { Component } from "react";

import Movie from "./Movie";

import "./MovieList.scss";

class MovieList extends Component {
  render() {
    return (
      <div className='movie-list'>
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </div>
    );
  }
}

export default MovieList;

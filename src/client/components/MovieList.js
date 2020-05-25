import React, { Component } from "react";

import Movie from "./Movie";

import "./MovieList.scss";

class MovieList extends Component {
  render() {
    const { movieList } = this.props;
    return (
      <div className='movie-list'>
        {movieList.length > 0 &&
          movieList.map(({ movieTitle, movieGenres }) => (
            <Movie key={movieTitle} title={movieTitle} genres={movieGenres} />
          ))}
      </div>
    );
  }
}

export default MovieList;

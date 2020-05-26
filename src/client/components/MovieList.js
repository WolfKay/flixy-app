import React, { Component } from "react";
import PropTypes from "prop-types";

import Movie from "./Movie";

import "./MovieList.scss";

class MovieList extends Component {
  render() {
    const { movieList, onWatchedCheck, onDeleteMovieClick } = this.props;
    return (
      <div className='movie-list'>
        {movieList &&
          movieList.length &&
          movieList.map(({ movie_title, movieGenres, movie_id, watched }) => (
            <div key={movie_title}>
              <Movie
                title={movie_title}
                genres={movieGenres}
                movieId={movie_id}
                watched={watched}
                onWatchedCheck={onWatchedCheck}
                onDeleteMovieClick={onDeleteMovieClick}
                isExtended
              />
            </div>
          ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  movieList: PropTypes.arrayOf(
    PropTypes.shape({
      movie_id: PropTypes.string,
      user_id: PropTypes.number,
      movie_title: PropTypes.string,
      watched: PropTypes.number
    })
  ),
  onWatchedCheck: PropTypes.func.isRequired,
  onDeleteMovieClick: PropTypes.func.isRequired
};

//TODO add rest proptypes
MovieList.defaultProps = {
  movieList: []
};

export default MovieList;

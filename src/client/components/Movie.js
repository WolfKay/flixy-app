import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Movie.scss";

class Movie extends Component {
  state = {
    isMovieWatched: this.props.watched === 1
  };

  handleOnChange = () => {
    const isWatched = this.state.isMovieWatched ? 0 : 1;
    this.props.onWatchedCheck(isWatched, this.props.movieId);
    this.setState({
      isMovieWatched: !this.state.isMovieWatched
    });
  };

  handleOnDeleteClick = () => {
    this.props.onDeleteMovieClick(this.props.movieId);
  };

  render() {
    const { title, genres, movieId, watched, isExtended } = this.props;
    return (
      <div className='movie-item'>
        <div className='movie-item__title'>{title}</div>
        <div className='movie-item__genres'>
          {genres &&
            genres.map((genre) => (
              <div key={movieId}>
                <span className='movie-item__genre'>{genre}</span>
              </div>
            ))}
        </div>
        {/* I use isExtended flag, to set the same movie component to behave differently, depending on where its shown */}
        {isExtended && (
          <div className='filters__elem'>
            <input
              onChange={this.handleOnChange}
              type='checkbox'
              id={movieId}
              checked={this.state.isMovieWatched}
              value={watched}
              name='watched'
            />
            <label htmlFor={movieId}>Watched</label>
            <button onClick={this.handleOnDeleteClick}>Delete movie</button>
          </div>
        )}
      </div>
    );
  }
}

Movie.propTypes = {
  title: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
  movieId: PropTypes.string,
  watched: PropTypes.number,
  onWatchedCheck: PropTypes.func,
  onDeleteMovieClick: PropTypes.func,
  noDelete: PropTypes.bool
};

Movie.defaultProps = {
  title: "",
  genres: [],
  movieId: "",
  watched: 0,
  onWatchedCheck: () => {},
  onDeleteMovieClick: () => {},
  isExtended: false
};

export default Movie;

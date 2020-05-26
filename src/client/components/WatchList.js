import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  createMovie,
  deleteMovie,
  getWatchlist,
  checkWatchedMovie
} from "./../../server/api/clients/watchlists";

import MovieList from "./MovieList";
import Filters from "./Filters";
import AddMovie from "./AddMovie";

import "./WatchList.scss";

class WatchList extends Component {
  state = {
    movieList: null
  };

  async componentDidMount() {
    // get query params
    var URL_STRING = window.location;
    var url = new URL(URL_STRING);
    const genreQuery = url.searchParams.get("genre");

    // GEt watchlist
    const movieList = await getWatchlist(this.props.user.id, genreQuery);
    this.setState({ movieList });
  }

  createMovie = (movie) => {
    if (movie) {
      createMovie(movie.movieTitle, this.props.user.id, movie.movieGenres);
    }
    window.location.reload();
  };

  deleteMovie = (movieId) => {
    if (movieId) {
      deleteMovie(movieId);
    }
    window.location.reload();
  };

  handleOnWatchedCheck = (watched, movieId) => {
    checkWatchedMovie(watched, movieId);
    window.location.reload();
  };

  render() {
    return (
      <div className='wrapper'>
        <div className='nav'>
          <span>FLIXY -</span> <span>Welcome {this.props.userHeader}</span>
        </div>
        <div className='header'>
          <span className='header__title'>Watchlist</span>
          <AddMovie createMovie={this.createMovie} noDelete />
        </div>
        <Filters />
        <MovieList
          className='movie-list'
          movieList={this.state.movieList}
          onWatchedCheck={this.handleOnWatchedCheck}
          onDeleteMovieClick={this.deleteMovie}
        />
      </div>
    );
  }
}

WatchList.propTypes = {
  user: PropTypes.shape({ email: PropTypes.string, id: PropTypes.number })
};

export default WatchList;

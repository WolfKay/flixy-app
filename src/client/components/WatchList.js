import React, { Component } from "react";

import createMovie from "./../../server/api/clients/watchlists";

import MovieList from "./MovieList";
import Filters from "./Filters";
import AddMovie from "./AddMovie";

import "./watchList.scss";

class WatchList extends Component {
  state = {
    //replace with DB query result
    movieList: [],
    newMovie: {}
  };

  componentDidMount() {
    createMovie(this.state.newMovie, this.props.user, 0);
  }

  createMovie = (newMovie) => {
    const movieList = [...this.state.movieList, newMovie];
    this.setState({ movieList, newMovie });
  };
  render() {
    return (
      <div className='wrapper'>
        <div className='nav'>
          <span>FLIXY -</span> <span>Welcome {this.props.user}</span>
        </div>
        <div className='header'>
          <span className='header__title'>Watchlist</span>
          <AddMovie createMovie={this.createMovie} />
        </div>
        <Filters />
        <MovieList className='movie-list' movieList={this.state.movieList} />
      </div>
    );
  }
}

export default WatchList;

import React, { Component } from "react";

import MovieList from "./MovieList";
import Filters from "./Filters";
import AddMovie from "./AddMovie";

import "./watchList.scss";

class WatchList extends Component {
  render() {
    return (
      <div className='wrapper'>
        <div className='nav'>
          <span>FLIXY -</span> <span>Welcome {this.props.user}</span>
        </div>
        <div className='header'>
          <span className='header__title'>Watchlist</span>
          {/* <AddMovie /> */}
          <div className='separator' />
          <Filters />
          <MovieList className='movie-list'></MovieList>
        </div>
      </div>
    );
  }
}

export default WatchList;

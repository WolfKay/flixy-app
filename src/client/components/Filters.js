import React, { Component } from "react";
// import createMovie from "./../../server/api/clients/watchlist";

import Input from "./Input";

import "./Filters.scss";

const GENRES_FILTER = ["romance", "horror", "drama"];

class Filters extends Component {
  state = {
    filterGenre: "",
    movietitle: ""
  };

  componentDidMount() {
    // createMovie()
  }

  getFilterGenreValue = (event) => {
    this.setState({ filterGenre: event.target.value });
  };

  getMovieFilterValue = (value) => {
    this.setState({ movietitle: value });
  };

  render() {
    return (
      <div className='filters'>
        {GENRES_FILTER.map((genre) => (
          <div className='filters__elem' key={genre}>
            <input
              onClick={this.getFilterGenreValue}
              type='radio'
              id={genre}
              value={genre}
              name='filters'
            />
            <label htmlFor={genre}>{genre}</label>
          </div>
        ))}

        {/* Reset button to unselect filters 
        TODO: style reset button to diffrentiate from genres*/}
        <button
          className='filters__reset '
          value=''
          onClick={this.getFilterGenreValue}
        >
          Reset genres
        </button>
        <Input
          className='search'
          placeholder='Search for movies in your watchlist'
          handleInputChange={this.getMovieFilterValue}
        />
      </div>
    );
  }
}

export default Filters;

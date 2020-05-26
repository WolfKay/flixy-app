import React, { Component } from "react";

import Input from "./Input";

import "./Filters.scss";

const ALLOWED_GENRES_FILTER = ["romance", "horror", "comedy"];

class Filters extends Component {
  state = {
    movietitle: ""
  };

  //TODO: allow search for movies
  getMovieFilterValue = (value) => {
    this.setState({ movietitle: value });
  };

  render() {
    return (
      <div className='filters'>
        {ALLOWED_GENRES_FILTER.map((genre) => (
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
          onInputChange={this.getMovieFilterValue}
        />
      </div>
    );
  }
}

export default Filters;

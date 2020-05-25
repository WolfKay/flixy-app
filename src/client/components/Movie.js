import React, { Component } from "react";

import "./Movie.scss";

const Movie = ({ title, genres }) => {
  return (
    <div className='movie-item'>
      <div className='movie-item__title'>{title}</div>
      <div className='movie-item__genres'>
        {genres &&
          genres.map((genre) => (
            <span className='movie-item__genre' key={title + genre}>
              {genre}
            </span>
          ))}
      </div>
    </div>
  );
};

export default Movie;

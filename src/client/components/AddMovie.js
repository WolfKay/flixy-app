import React, { PureComponent } from "react";

import Input from "./Input";
import Movie from "./Movie";

const ALLOWED_MOVIE_GENRES = ["horror", "romance", "comedy"];

class AddMovie extends PureComponent {
  state = {
    movieTitle: "",
    movieGenres: []
  };

  addMovietitle = (e) => {
    if (event.keyCode == 13) {
      this.setState({ movieTitle: e.target.value });
      e.target.value = "";
    }
  };

  addGenres = (e) => {
    const newGenre = e.target.value.toLowerCase();
    const { movieGenres } = this.state;
    const genres = [...this.state.movieGenres, newGenre];

    if (
      movieGenres.length > 0 &&
      movieGenres.find((genre) => genre === newGenre)
    ) {
      return;
    }
    if (
      event.keyCode == 13 &&
      ALLOWED_MOVIE_GENRES.find((genre) => genre === newGenre)
    ) {
      this.setState({ movieGenres: genres });
      e.target.value = "";
    }
  };

  handleCreateMovie = () => {
    this.props.createMovie(this.state);
    this.setState({ movieTitle: "", movieGenres: [] });
  };

  render() {
    const { movieTitle, movieGenres } = this.state;
    return (
      <div className='create-movie-input'>
        <span className='create-movie-input__title'>Add a movie</span>
        <span className='create-movie-input__field'>Movie title:</span>
        <Input
          className='search'
          placeholder='Press enter to add'
          onInputKeyPress={this.addMovietitle}
        />
        <span className='create-movie-input__field'>Movie genres:</span>
        <Input
          className='search'
          placeholder='Press enter to add'
          onInputKeyPress={this.addGenres}
        />
        {movieTitle && <Movie title={movieTitle} genres={movieGenres} />}
        <button onClick={this.handleCreateMovie}>Create movie</button>
      </div>
    );
  }
}

export default AddMovie;

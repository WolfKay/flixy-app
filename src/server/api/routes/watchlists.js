const express = require("express");
const router = express.Router();
const db = require("../../db/index");
const { v4: uuidv4 } = require("uuid");

//Get user watchlist
router.get("/", (req, res) => {
  // const genreQuery = req.get("genre");
  let getWatchlist = `SELECT * FROM watchlists WHERE user_id = ? ORDER BY watched`;
  // if (genreQuery) {
    // TODO: Allow querying for genres
  //   getWatchlist = `SELECT * FROM watchlists WHERE user_id = ? AND movie_id IN (SELECT movie_id FROM movie_genres WHERE genre = "${genreQuery}")`;
  // }

  try {
    db.all(getWatchlist, [req.get("userId")], (err, data) => {
      if (err) {
        throw err;
      }
      res.send(data);
    });
  } catch (err) {
    throw new Error(err);
  }
});

//Add movie to user's watchlist
router.post("/", (req, res) => {
  const addMovie = `INSERT INTO watchlists (movie_id, movie_title, user_id, watched) VALUES (?, ?, ?, ?)`;
  const movieID = uuidv4();
  const movieGenres = req.body.genres;

  if (!req.body.title || !req.body.user) {
    throw new Error("Movie title and user are required!");
  }

  if (!movieGenres.length) {
    try {
      db.run(addMovie, [movieID, req.body.title, req.body.user, 0], (err) => {
        if (err) {
          throw err;
        }
        res.sendStatus(200);
      });
    } catch (err) {
      throw new Error(err);
    }
  } else {
    const addMovieGenres = `INSERT INTO movie_genres(movie_id, genre) VALUES `;
    const insertValues = movieGenres.map((genre) => {
      return `("${movieID}", "${genre}")`;
    });
    const queryGenres = addMovieGenres + insertValues.join(",");

    db.serialize(() => {
      try {
        db.run(addMovie, [movieID, req.body.title, req.body.user, 0], (err) => {
          if (err) {
            throw err;
          }
        }).run(queryGenres, (err, row) => {
          if (err) {
            throw err;
          }
          res.sendStatus(200);
        });
      } catch (err) {
        throw new Error(err);
      }
    });
  }
});

//Delete movie
router.delete("/", (req, res) => {
  const deleteMovie = `DELETE FROM watchlists WHERE movie_id = ?`;

  if (!req.body.movieId) {
    throw new Error("Movie title not found, couldn't delete");
  }
  try {
    db.run(deleteMovie, [req.body.movieId], (err) => {
      if (err) {
        throw err;
      }
      res.sendStatus(200);
    });
  } catch (err) {
    throw new Error(err);
  }
});

//Update movie watched status
router.put("/:movie_id", (req, res) => {
  const updateMovieWatchedStatus = `UPDATE watchlists SET watched = ? WHERE movie_id = ?`;

  if (!req.params.movie_id) {
    throw new Error("Movie title not found, couldn't update watched!");
  }

  try {
    db.run(
      updateMovieWatchedStatus,
      [req.body.watched, req.params.movie_id],
      (err) => {
        if (err) {
          throw err;
        }
        res.sendStatus(200);
      }
    );
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = router;

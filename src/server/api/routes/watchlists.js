const express = require("express");
const router = express.Router();
const db = require("../../db/index");
const { v4: uuidv4 } = require("uuid");

//Get user watchlist
router.get("/", (req, res) => {
  res.send("hi");
});

//Add movie to user's watchlist
router.post("/", (req, res) => {
  const addMovie = `INSERT INTO watchlists (movie_id, movie_title, user_id, watched) VALUES (?, ?, ?, ?)`;
  const genres = [];
  const movieID = uuidv4();

  if (!genres.length) {
    try {
      db.run(
        addMovie,
        [movieID, req.body.title, req.body.user, req.body.watched],
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
  } else {
    const addMovieGenres = `INSERT INTO movie_genres(movie_id, genre) VALUES `;
    const insertValues = genres.map((genre) => {
      return `("${movieID}", "${genre}")`;
    });
    const queryGenres = addMovieGenres + insertValues.join(",");

    db.serialize(() => {
      try {
        db.run(
          addMovie,
          [movieID, req.body.title, req.body.user, req.body.watched],
          (err) => {
            if (err) {
              throw err;
            }
          }
        ).run(queryGenres, (err, row) => {
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

//Add genres

//Delete movie from user's watchlist
// router.delete("/", (req, res) => {
//   const movie = movies.find(({ id }) => id === parseInt(req.body.id));

//   const index = movies.indexOf(movie);
//   movies.splice(index, 1);

//   res.send(movies);
// });

module.exports = router;

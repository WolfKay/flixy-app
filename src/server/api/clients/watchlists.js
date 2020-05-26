const getWatchlist = (userId, genreQuery) => {
  const res = fetch(
    `http://localhost:3000/api/me/watchlist/?genre=${genreQuery}`,
    {
      method: "GET",
      mode: "cors",
      credentials: "omit",
      headers: {
        "Content-Type": "application/json",
        userId: userId
      }
    }
  )
    .then((data) => data.json())
    .catch((err) => console.log(err, "There was an error fetching watchlist"));
  return res;
};

const createMovie = (title, user, genres) => {
  fetch("http://localhost:3000/api/me/watchlist", {
    method: "POST",
    mode: "cors",
    credentials: "omit",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title, user, genres })
  }).catch((err) => console.log(err, "There was an error creating a movie"));
};

const deleteMovie = (movieId) => {
  fetch(`http://localhost:3000/api/me/watchlist`, {
    method: "DELETE",
    mode: "cors",
    credentials: "omit",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ movieId })
  }).catch((err) => console.log(err, "There was an error deleting a movie"));
};

const checkWatchedMovie = (watched, movieId) => {
  fetch(`http://localhost:3000/api/me/watchlist/${movieId}`, {
    method: "PUT",
    mode: "cors",
    credentials: "omit",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ watched })
  }).catch((err) =>
    console.log(err, "There was an error while checking the movie")
  );
};

module.exports = { createMovie, deleteMovie, getWatchlist, checkWatchedMovie };

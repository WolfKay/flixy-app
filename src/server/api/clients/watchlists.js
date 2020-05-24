const createMovie = (title, user, watched) => {
  fetch("http://localhost:3000/api/me/watchlist", {
    method: "POST",
    mode: "cors",
    credentials: "omit",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title, user, watched }) // body data type must match "Content-Type" header
  }).catch((err) => console.log(err, "There was an error creating an user"));
};

export default createMovie;

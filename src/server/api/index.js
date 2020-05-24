const express = require("express");
// const request = require("request");
const path = require("path");
const cors = require("cors");

// const asyncHandler = require("express-async-handler");
const watchlists = require("./routes/watchlists");

const db = require("../db/index");
const app = express();

const WATCHLIST_PATH = "/api/me/watchlist";
const PORT = process.env.FLIXY_PORT || 3000;

// TODO: Connect to movie DB API to populate Movie's table in own DB
// const MOVIES_URL =
//   "https://api.themoviedb.org/3/search/movie?api_key=bc409707dad322375b3778ef5e2488d0&language=en-US";

// Get movies from Movie API
// app.get("/api/movies/:keyword", (req, res) => {
//   // const options = {
//   //   url: `${MOVIES_URL}&query=${req.params.keyword}`,
//   //   headers: {
//   //     Authorization: "bc409707dad322375b3778ef5e2488d0",
//   //     "Content-Type": "application/json;charset=utf-8",
//   //   },
//   // };
//   // request.get(options, (error, response, body) => {
//   //   if (error) {
//   //     // If there is an error, tell the user
//   //     res.send("An erorr occured");
//   //   }
//   //   // Otherwise do something with the API data and send a response
//   //   else {
//   //     res.send(body);
//   //   }
//   // });
// });

app.use(express.json()); //populate req.body object
app.use(cors());
app.use(WATCHLIST_PATH, watchlists);

//Home page and get the user
app.post("/api/signup", (req, res) => {
  const userEmail = req.body.email;
  const getUsers = `SELECT * FROM users WHERE email = ?`;
  const createUser = `INSERT INTO users(email) VALUES(?)`;

  if (!userEmail) {
    throw new Error("User email required");
  }

  // Get the user
  try {
    db.get(getUsers, [userEmail], (err, user) => {
      if (err) {
        throw err;
      }

      // If user exists redirect to their own watchlist
      if (user) {
        //TODO redirect user
        // console.log("being redirected...");
        // res.redirect(307, WATCHLIST_PATH);
      } else {
        //If user doesnt exist create a new one
        db.run(createUser, [userEmail], (err) => {
          if (err) {
            throw err;
          }
          console.log("Success! User created");
          res.sendStatus(200);
        });
      }
    });
  } catch (err) {
    throw new Error(err);
  }
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

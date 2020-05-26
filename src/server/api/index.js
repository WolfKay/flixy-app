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

app.use(express.json()); //populate req.body object
app.use(cors());
app.use(WATCHLIST_PATH, watchlists);

//Home page and get the user
app.post("/api/signup", (req, res) => {
  const userEmail = req.body.email;
  const getUser = `SELECT * FROM users WHERE email = ?`;
  const createUser = `INSERT INTO users(email) VALUES(?)`;

  if (!userEmail) {
    throw new Error("User email required");
  }

  // Get the user
  try {
    db.get(getUser, [userEmail], (err, user) => {
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
        db.run(createUser, [userEmail], (err, user) => {
          if (err) {
            throw err;
          }
          console.log("Success! User created", user);
          res.sendStatus(200);
        });
      }
    });
  } catch (err) {
    throw new Error(err);
  }
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

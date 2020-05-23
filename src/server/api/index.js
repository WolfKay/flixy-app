const express = require("express");
// const request = require("request");
const path = require("path");
const cors = require("cors");
const asyncHandler = require("express-async-handler");
const watchlists = require("./routes/watchlists");

const app = express();

const WATCHLIST_PATH = "/api/me/watchlist";
const PORT = process.env.FLIXY_PORT || 3000;

const users = [{ id: 1, email: "poweruser@gmail.com" }];

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
app.use(WATCHLIST_PATH, watchlists);
app.use(cors());

//Home page and get the user
app.post(
  "/api/signup",
  asyncHandler(async (req, res) => {
    const userEmail = req.body.email;

    if (!userEmail) {
      throw new Error("User email required");
    }

    //If user exists redirect to their watchlist
    if (users.find(({ email }) => email === userEmail)) {
      return res.redirect(307, WATCHLIST_PATH);
    }

    //If user doesn't exist yet create one.
    const newUser = { id: users.length + 1, email: userEmail };
    users.push(newUser);
    res.send(users);
  })
);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

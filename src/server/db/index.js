const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.resolve(__dirname, "./flixsy.db");

// open database
let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Connected to the flixsy SQlite database.");
});

// Query DB for user's watchlist
const getWatchlist = () => {
  const getAllMovies = `SELECT * FROM watchlists`;
  db.all(getAllMovies, (err, rows) => {
    if (err) {
      throw err;
    }
    return rows;
  });
  db.close();
};

// // Query DB for user's watchlist
// export const getallMovies = () => {
//   const getAllMovies = `SELECT * FROM watchlists`;
//   db.all(getAllMovies, (err, rows) => {
//     if (err) {
//       throw err;
//     }
//     rows.forEach((row) => {
//       console.log(row);
//     });
//     db.close();
//   });
// };

module.exports = db;

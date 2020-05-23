const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.resolve(__dirname, "./flixsy.db");

// open database in memory
let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Connected to the flixsy SQlite database.");
});


// Query DB for users
// TODO: create user and get just one email
let getUserEmails = `SELECT email FROM users`;
db.all(getUserEmails, (err, rows) => {
  if (err) {
    throw err;
  }

  rows.forEach((row) => {
    console.log(row.email);
  });
  // db.close();
});

// Query DB for movies
let getAllMovies = `SELECT email FROM users`;
db.all(getAllMovies, (err, rows) => {
  if (err) {
    throw err;
  }

  rows.forEach((row) => {
    console.log(row);
  });
  db.close();
});

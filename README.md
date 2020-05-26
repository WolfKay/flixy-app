# Flixy
Create a watchlist and keep track of movies you have watched or movies you would like to watch in the future!

## Used stack:
- The Frontend was built on React, Babel, Webpack and SASS.
- The Backend was built with Node,js, Express.js and DB with Sqlite. Plus extra packages to make this stack possible like Cors, Sqlite3 and more.

# 1.- Start the App:
- Start the server by running in the terminal:"npm run start-server:dev"
- Start the React App by running in the terminal:"npm run start:dev"
- New tab will Open with localhost:8080/

# 2.- Next steps:
## - On the frontend:
- Add test coverage to components.
- Add Redux to manage states and data.
- Add the possibility for the user to Navigate to routes with '?genre=horror' for Ex.
- Add functional components instead of React classes, missing proptype validation and Pure components.
- Improve responsive design and General styles improvement.
- Handle async loading between pages and content request.
- Allow user to Filter through a movie search and genres.
- Store genre constants in a config file.

## - On the Backend:
- Separate DB queries from the routes file in to a query .js.
- Refactor queries to allow the user to creation.
- Implement custom error handler.
- Add fetch body to constants.


### - Nice to haves in the future
- Auth.
- connect to Mvoie API to populate DB and search through movie titles. Would make querying easier. and keep a cleaner DB with no movie duplicates.

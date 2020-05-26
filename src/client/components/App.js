import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import getUser from "./../../server/api/clients/users";

import WatchList from "./WatchList";
import Login from "./Login";

const createUser = { email: "picklerick@gmail.com", id: 1 };

class App extends Component {
  state = {
    user: {},
    userHeader: ""
  };

  handleGetUser = (userEmail) => {
    //TODO replace Hardcoded user with userEmail value
    this.setState({ user: createUser, userHeader: userEmail });
  };

  handleLogIn = () => {
    getUser(createUser.email);
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route path='/watchlist'>
            <WatchList
              user={createUser}
              userHeader={this.state.userHeader}
            />
          </Route>
          <Route path='/'>
            <Login createUser={this.handleGetUser} />

            <Link to='/watchlist'>
              <button onClick={this.handleLogIn}>Log in</button>
            </Link>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;

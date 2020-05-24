import React, { Component } from "react";
import getUser from "./../../server/api/clients/users";

import WatchList from "./WatchList";

const USER = "picklerick@gmail.com";

class App extends Component {
  componentDidMount() {
    getUser(USER);
  }
  render() {
    return (
      <div>
        <WatchList user={USER} />
      </div>
    );
  }
}

export default App;

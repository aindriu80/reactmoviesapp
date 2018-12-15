import React, { Component } from "react";

import MovieResults from "./movieResults";
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row text-center">
          <div className="jumbotron">
            <h1 className="display-4">React Movies App</h1>
            <p>Who doesn't love Movies?</p>
          </div>
          <div className="row">
            <MovieResults />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

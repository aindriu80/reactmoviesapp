import React, { Component } from "react";
import MovieResults from "./movieResults";
import Search from "./Search";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h1 className="display-4">React Movies App</h1>
            <p>Who doesn't love Movies?</p>
          </div>
          <div className="row text-left">
            <MovieResults />
            <Search />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

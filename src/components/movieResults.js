import React, { Component } from "react";
import { connect } from "react-redux";

class MovieResults extends Component {
  render() {
    return <h1>Movie Results will go here!</h1>;
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {};
}
export default connect()(MovieResults);

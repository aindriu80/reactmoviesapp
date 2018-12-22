import React, { Component } from "react";
import { connect } from "react-redux";

class FavoriteMovieList extends Component {
  render() {
    return <h4>My favorite Movies</h4>;
  }
}

function mapStateToProps(state) {
  console.log("FavoriteMoviesList -", state);
  return {};
}
export default connect(
  mapStateToProps,
  null
)(FavoriteMovieList);

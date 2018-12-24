import React, { Component } from "react";
import { connect } from "react-redux";
import MovieItem from "./MovieItem";

class FavoriteMovieList extends Component {
  render() {
    // console.log(this.props.favorites);

    return (
      <div>
        <h4>My favorite Movies</h4>
        {this.props.favorites.map(movie => {
          return <MovieItem movie={movie} key={movie.id} showButton={false} />;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log("FavoriteMoviesList -", state);
  return {
    favorites: state.favorites
  };
}
export default connect(
  mapStateToProps,
  null
)(FavoriteMovieList);

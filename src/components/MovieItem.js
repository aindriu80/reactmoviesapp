import React, { Component } from "react";

// import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";

import { addToFavorite, removeFromFavorite } from "../actions";
import { connect } from "react-redux";

const urlComponent = "https://image.tmdb.org/t/p/w600_and_h900_bestv2/";

class MovieItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favorited: false
    };
  }

  addToFavorite() {
    this.setState({ favorited: !this.state.favorited });
    this.props.addToFavorite(this.props.movie);
  }

  removeFromFavorite() {
    this.setState({ favorited: !this.state.favorited });
    this.props.removeFromFavorite(this.props.movie);
  }

  displayFav() {
    if (!this.state.favorited) {
      return (
        <FontAwesomeIcon icon={farHeart} onClick={() => this.addToFavorite()} />
      );
    } else {
      return (
        <FontAwesomeIcon
          icon={fasHeart}
          onClick={() => this.removeFromFavorite()}
        />
      );
    }
  }
  render() {
    // console.log(this.props);
    return (
      <div className="col-sm-12 col-sm-3">
        <div className="thumbnail">
          <img src={urlComponent + this.props.movie.poster_path} alt="..." />
          <div className="caption">
            <h3>{this.props.movie.title}</h3>
            <p>{this.props.movie.overview}</p>
            <p>Release Date: {this.props.movie.release_date}</p>
            <p>
              Ratings: -{" "}
              <span>
                <span className="badge badge-default">
                  {this.props.movie.vote_average}
                </span>
              </span>
            </p>
            <p>{this.props.showButton ? this.displayFav() : null}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addToFavorite, removeFromFavorite }
)(MovieItem);

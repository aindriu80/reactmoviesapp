import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const urlComponent = "https://image.tmdb.org/t/p/w600_and_h900_bestv2/";

class MovieItem extends Component {
  displayFav() {
    if (!this.state.favorited) {
      return (
        <span
          className=""
          onClick={() => this.setState({ favorited: !this.state.favorited })}
        />
      );
    } else {
      return <span className="glyphicon glypicon-heart" />;
    }
  }
  render() {
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
            <p>
              <i className="fa fa-heart" />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieItem;

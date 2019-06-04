import React from 'react';
import { get } from 'lodash';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { getRatings } from "../actions/movieAction";

class MovieTile extends React.Component {

  componentDidMount() {
    this.props.getRatings(this.props.movieInfo)
  }

  render() {
    const { movieInfo } = this.props;
    if (movieInfo.Poster === "N/A") {
      movieInfo.Poster = undefined;
    }
    return (
      <div className="column is-10 is-offset-1 animated fadeInUp">
        <div className="card">

          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image">
                  <img width="200px" src={get(movieInfo, 'Poster', 'https://via.placeholder.com/300x420?text=Image+not+found')}
                       alt={get(movieInfo, 'Title', 'Not found')}/>
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">
                  {get(movieInfo, 'Title')} - ({get(movieInfo, 'Year')})
                </p>

              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="card-footer-item">
              <div className="tags has-addons">
                <span className="tag">Average Score</span>
                <span
                  className={`tag is-${movieInfo.OverallRating >= 60 ? 'success' : 'warning'}`}>{get(movieInfo, 'OverallRating', '-')}</span>
              </div>
            </div>
            <div className="card-footer-item">
              <span className="tag is-info">{get(movieInfo, 'Type')}</span>
            </div>
            <div className="card-footer-item">
              <Link className="button is-primary" to={`/movie/${get(movieInfo, 'imdbID')}`}>More</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

MovieTile.defaultProps = {
  movieInfo: {},
};

MovieTile.propTypes = {
  getRatings: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  movie: get(state.movies.movie, 'data', {}),

});

export default connect(mapStateToProps, { getRatings })(MovieTile);

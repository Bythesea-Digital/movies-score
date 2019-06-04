import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRatings, fetchOneMovie } from '../actions/movieAction'
import PropTypes from 'prop-types'
import { get } from 'lodash';


class ShowMovie extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.match.params.id
    // componentWillMount is deprecated
    this.props.fetchOneMovie(this.id);
    this.props.getRatings({ imdbID: props.match.params.id })
    // console.log(this.props.movie)
  }


  render() {
    const { rating, movieInfo } = this.props;
    // console.log(movieInfo)
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
                  <img src={get(movieInfo, 'Poster', 'https://via.placeholder.com/300x420?text=Imagem+Não+Encontrada')}
                       alt={get(movieInfo, 'Title', 'Not found')}/>
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">
                  {get(movieInfo, 'Title')} - ({get(movieInfo, 'Year')})
                </p>
                <p><b>{get(movieInfo, 'Runtime')}</b></p>
                <p>
                  {get(movieInfo, 'Plot')}
                </p>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="card-footer-item">
              <div className="tags has-addons">
                <span className="tag">Média de Rating</span>
                <span
                  className={`tag is-${rating >= 60 ? 'success' : 'warning'}`}>{rating}</span>
              </div>
            </div>
            <div className="card-footer-item">
              <span className="tag is-info">{get(movieInfo, 'Type')}</span>
            </div>
            <div className="card-footer-item">
              <Link className="button is-link is-outlined" to={`/`}>Voltar</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ShowMovie.propTypes = {
  getRatings: PropTypes.func.isRequired,
  fetchOneMovie: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  rating: get(state.movies.movie, 'OverallRating', 0),
  movieInfo: get(state.movies.movieInfo, 'data', {}),
});


export default connect(mapStateToProps, { getRatings, fetchOneMovie })(withRouter(ShowMovie))
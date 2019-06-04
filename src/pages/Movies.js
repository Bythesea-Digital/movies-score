import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchMovies, getRatings } from "../actions/movieAction";
import { orderMovies } from "../actions/filterAction";
import PropTypes from 'prop-types'
import MovieTile from "../components/MovieTile";
import { get } from 'lodash';

class Movies extends Component {

    state = {
      title: '',
      year: '',
      order_title: 'select',
      order_rating: 'select',
      searched: false
    };


  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    // console.log(e.target.value);

  };

  filterOnChange = (e) => {
    console.log(e.target.value);
    switch (e.target.value) {
      case 'titulo_asc':
        this.props.orderMovies(this.props.movies, 'titulo_asc');
        break;
      case 'titulo_desc':
        this.props.orderMovies(this.props.movies, 'titulo_desc');
        break;
      case 'rating_asc':
        this.props.orderMovies(this.props.movies, 'rating_asc');
        break;
      case 'rating_desc':
        this.props.orderMovies(this.props.movies, 'rating_desc');
        break;
    }
  };

  getMovies = (e) => {
    e.preventDefault();
    this.setState({ searched: true });
    const s = this.state.title;
    const y = this.state.year;
    this.props.fetchMovies(s, y)

  };

  renderFilters = () => {
    return (
      <div className="card-footer animated fadeIn">
        <div className="card-footer-item">
          <div className="tags has-addons ">
            <span className="tag">You searched for:</span>
            <span className="tag is-primary">{this.state.title} {get(this.state, 'year', '')}</span>
          </div>
        </div>

        <div className="card-footer-item">
          <div className="select ">
            <select onChange={this.filterOnChange} value={this.state.order_title} name="order">
              <option value="select">Order by Title</option>
              <option value="titulo_asc">A-Z</option>
              <option value="titulo_desc">Z-A</option>
            </select>
          </div>
        </div>
        <div className="card-footer-item">
          <div className="select ">
            <select onChange={this.filterOnChange} value={this.state.order_title} name="order">
              <option value="select">Order by rating</option>
              <option value="rating_asc">Worst first</option>
              <option value="rating_desc">Best first</option>
            </select>
          </div>
        </div>


      </div>
    )
  };

  render() {
    const {searched, title} = this.state;
    const moviesTile = this.props.movies.map((movie, index) => (
      <MovieTile key={index} movieInfo={movie} isList={true}/>
    ));
    // console.log('Movies', this.props.movies)
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">

              <div className="card animated fadeIn">
                <div className="card-header">
                  <h1 className="card-header-title">
                    <span className="has-margin" style={{marginRight: 10}}>Movies by Felipe Lobo</span>
                    <div className="control">
                      <div className="tags has-addons">
                        <a href="https://github.com/wolfmaster8/movies-score" target="_blank" className="tag is-primary">{process.env.REACT_APP_VERSION}</a>
                      </div>
                    </div>
                  </h1>

                </div>
                <div className="card-content">
                  <p className="subtitle">
                    Welcome to <strong>Movies</strong>!
                  </p>
                  <p className="subtitle is-6">I'll calculate the average score based on IMDB, Rotten Tomatoes and Metacritic. <br/> Start by typing the name of your favourite movie</p>
                  <form>
                    <div className="field is-grouped">
                      <p className="control is-expanded">
                        <input name="title" onChange={this.onChange} className="input" type="text"
                               placeholder="Movie or TV series name"/>
                      </p>
                      <p className="control is-expanded">
                        <input name="year" onChange={this.onChange} className="input" type="number" placeholder="Year"/>
                      </p>
                      <p className="control is-expanded">

                      </p>
                      <p className="control">
                        <button disabled={!title} onClick={this.getMovies} type="submit" className="button is-info">
                          Search
                        </button>
                      </p>
                    </div>

                  </form>

                </div>

                {searched && this.props.movies.length ? this.renderFilters() : ''}

                {/* <progress style={{borderRadius: 0}} class="progress is-small is-primary" max="100">15%</progress> */}
              </div>
            </div>
          </div>
          {moviesTile}
          {!this.props.movies.length && searched && <p className="has-text-centered">No movies or TV series found</p>}
        </div>
      </section>
    );
  }
}

Movies.propTypes = {
  fetchMovies: PropTypes.func.isRequired,
  getRatings: PropTypes.func.isRequired,
  orderMovies: PropTypes.func.isRequired

};

const mapStateToProps = state => ({
  movies: get(state.movies.movies.data, 'Search', []),
  ordered: state
});

export default connect(mapStateToProps, { fetchMovies, getRatings, orderMovies })(withRouter(Movies));

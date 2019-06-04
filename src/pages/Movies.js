import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchMovies, getRatings } from "../actions/movieAction";
import { orderMovies } from "../actions/filterAction";
import PropTypes from 'prop-types'
import MovieTile from "../components/MovieTile";
import { get } from 'lodash';

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'bird box',
      year: '',
      order_title: 'select',
      order_rating: 'select',
      searched: false
    }
  }

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
    this.setState({ searched: true })
    const s = this.state.title;
    const y = this.state.year;
    this.props.fetchMovies(s, y)

  };

  renderFilters = () => {
    return (
      <div className="card-footer animated fadeIn">
        <div className="card-footer-item">
          <div className="tags has-addons ">
            <span className="tag">Termo de Busca</span>
            <span className="tag is-primary">{this.state.title} {get(this.state, 'year', '')}</span>
          </div>
        </div>

        <div className="card-footer-item">
          <div className="select ">
            <select onChange={this.filterOnChange} value={this.state.order_title} name="order">
              <option value="select">Ordenar por Título</option>
              <option value="titulo_asc">Crescente</option>
              <option value="titulo_desc">Decrescente</option>
            </select>
          </div>
        </div>
        <div className="card-footer-item">
          <div className="select ">
            <select onChange={this.filterOnChange} value={this.state.order_title} name="order">
              <option value="select">Ordenar por Rating</option>
              <option value="rating_asc">Menor Primeiro</option>
              <option value="rating_desc">Maior primeiro</option>
            </select>
          </div>
        </div>


      </div>
    )
  };

  render() {
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
                    Movies
                  </h1>
                </div>
                <div className="card-content">
                  <p className="subtitle">
                    Bem-vindo ao <strong>Movies</strong>!
                  </p>
                  <form>
                    <div className="field is-grouped">
                      <p className="control is-expanded">
                        <input name="title" onChange={this.onChange} className="input" type="text"
                               placeholder="Nome do filme"/>
                      </p>
                      <p className="control is-expanded">
                        <input name="year" onChange={this.onChange} className="input" type="number" placeholder="Ano"/>
                      </p>
                      <p className="control is-expanded">

                      </p>
                      <p className="control">
                        <button onClick={this.getMovies} type="submit" className="button is-info">
                          Busca
                        </button>
                      </p>
                    </div>

                  </form>

                </div>

                {this.state.searched && this.renderFilters()}

                {/* <progress style={{borderRadius: 0}} class="progress is-small is-primary" max="100">15%</progress> */}
              </div>
            </div>
          </div>
          {moviesTile}
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

import { connect } from "react-redux";
import Movies from "./Movies";
import { Creators as MoviesActions, SearchType } from "../../store/movies/duck";
import { searchMovies } from "../../store/movies/thunk";

const mapStateToProps = state => ({
  appState: state.movies.appState,
  movies: state.movies.moviesList
});

const mapDispatchToProps = dispatch => ({
  startSearch: ({ searchTerm, year }: SearchType) =>
    dispatch(searchMovies({ year, searchTerm }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);

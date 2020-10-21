import { connect } from "react-redux";
import Movies from "./Movies";
import { Creators as MoviesActions, SearchType } from "../../store/movies/duck";

const mapStateToProps = state => ({
  appState: state.movies.appState,
  movies: state.movies.moviesList
});

const mapDispatchToProps = dispatch => ({
  startSearch: ({ searchTerm, year }: SearchType) =>
    dispatch(MoviesActions.startSearch({ year, searchTerm }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);

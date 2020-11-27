import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import {
  Creators as MoviesActions,
  SearchType
} from "../../../../store/movies/duck";

const mapStateToProps = state => ({
  appState: state.movies.appState
});

const mapDispatchToProps = dispatch => ({
  startSearch: ({ searchTerm, year }: SearchType) =>
    dispatch(MoviesActions.startSearch({ year, searchTerm }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);

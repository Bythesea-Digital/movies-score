import { createActions, createReducer } from "reduxsauce";

export type SearchType = {
  searchTerm: string;
  year: string;
};

export type MoviesCreators = {
  startSearch: string;
};

export const { Types, Creators } = createActions({
  startSearch: ["searchTerm", "year"],
  searchSuccess: ["movies"],
  cleanMovies: null,
  searchError: null
});

export type Rating = {
  imdb: number;
  rottenTomatoes: number;
  metacritic: number;
  total: number;
};

export type Movie = {
  title: string;
  year: string;
  imdbId: string;
  type: string;
  poster: string;
  rating: {};
};

export enum AppState {
  FETCHING = "FETCHING",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR"
}

interface MoviesInitialState {
  appState: null | keyof typeof AppState;
  moviesList: Movie[];
  selectedMovie: Movie;
}

const initialState: MoviesInitialState = {
  appState: null,
  moviesList: [] as Movie[],
  selectedMovie: {} as Movie
};

const start = (state: typeof initialState = initialState) => ({
  ...state,
  appState: AppState.FETCHING
});

const success = (state: typeof initialState = initialState, action) => ({
  ...state,
  appState: AppState.SUCCESS,
  moviesList: action.movies
});

const cleanMovies = (state: typeof initialState = initialState) => ({
  ...state,
  appState: AppState.SUCCESS,
  moviesList: [] as Movie[]
});

const searchError = (state: typeof initialState = initialState) => ({
  ...state,
  appState: AppState.ERROR,
});

export default createReducer(initialState, {
  [Types.START_SEARCH]: start,
  [Types.SEARCH_SUCCESS]: success,
  [Types.CLEAN_MOVIES]: cleanMovies,
  [Types.SEARCH_ERROR]: searchError,
});

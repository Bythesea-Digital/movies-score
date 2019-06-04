import { FETCH_MOVIES, FETCH_ONE_MOVIE, GET_RATINGS } from "../actions/types";

const initialState = {
  movies: [],
  movie: {},
  movieInfo: {}
};

export default function(state = initialState, action){
  switch(action.type){
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload
      };
    case GET_RATINGS:
      return {
        ...state,
        movie: action.payload
      };
    case FETCH_ONE_MOVIE:
      return {
        ...state,
        movieInfo: action.payload
      };
    default:
      return state;
  }
}
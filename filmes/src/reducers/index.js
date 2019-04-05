import { combineReducers } from "redux";
import movieReducer from './movieReducer';
import filterReducer from './filterReducer';

export default combineReducers({
  movies: movieReducer,
  filtered: filterReducer
})
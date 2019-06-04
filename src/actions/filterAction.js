import { ORDER } from "./types";

const orderFunctionASC = (movies, index) => {
  movies.sort((a, b) => {
    let index_1 = a[index].toLowerCase();
    let index_2 = b[index].toLowerCase();
    if (index_1 < index_2) return -1;
    if (index_2 > index_1) return 1;
    return 0
  });
  return movies;
};

const orderFunctionDESC = (movies, index) => {
  movies.sort((a, b) => {
    let index_1 = a[index].toLowerCase();
    let index_2 = b[index].toLowerCase();
    if (index_1 > index_2) return -1;
    if (index_2 < index_1) return 1;
    return 0
  });
  return movies;
};

const orderFunctionNumberASC = (movies, index) => {
  movies.sort((a, b) => {
    let index_1 = a[index];
    let index_2 = b[index];
    if (index_1 < index_2) return -1;
    if (index_2 > index_1) return 1;
    return 0
  });
  return movies;
};

const orderFunctionNumberDESC = (movies, index) => {
  movies.sort((a, b) => {
    let index_1 = a[index];
    let index_2 = b[index];
    if (index_1 > index_2) return -1;
    if (index_2 < index_1) return 1;
    return 0
  });
  return movies;
};

export const orderMovies = (movies, by) => dispatch => {
  switch (by) {
    case 'titulo_asc':
      movies = orderFunctionASC(movies, 'Title');
      break;
    case 'titulo_desc':
      movies = orderFunctionDESC(movies, 'Title');
      break;
    case 'rating_asc':
      movies = orderFunctionNumberASC(movies, 'OverallRating');
      break;
    case 'rating_desc':
      movies = orderFunctionNumberDESC(movies, 'OverallRating');
      break;
    default:
      return movies;
  }
  dispatch({
    type: ORDER,
    payload: movies
  })
};
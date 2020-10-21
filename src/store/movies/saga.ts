import { takeLatest, call, put, all } from "redux-saga/effects";
import { Types as MoviesTypes, Creators as MoviesActions } from "./duck";

import api from "../../services/api";

function* searchMovies({ searchTerm: { searchTerm, year } }) {
  try {
    yield put(MoviesActions.cleanMovies());
    const response = yield call(api.get, "", {
      params: {
        s: searchTerm,
        y: year
      }
    });
    if (response.data.Error) {
      yield put(MoviesActions.searchError());
    } else {
      const formattedMovies = yield call(formatMovies, {
        apiResponse: response.data.Search
      });
      yield put(MoviesActions.searchSuccess(formattedMovies));
    }
  } catch (e) {
    console.log(e);
  }
}

function* formatMovies({ apiResponse }) {
  const movies = yield all(
    apiResponse.map(movies => {
      //TODO: Ratings logic
      return {
        title: movies.Title,
        year: movies.Year,
        imdbId: movies.imdbID,
        poster:
          movies.Poster === "N/A"
            ? "https://via.placeholder.com/300x380?text=Image+not+found"
            : movies.Poster,
        type: movies.Type,
        rating: {
          imdb: 0,
          metacritic: 0,
          rottenTomatoes: 0,
          total: 0
        }
      };
    })
  );
  return movies;
}

export default [
  // @ts-ignore
  takeLatest(MoviesTypes.START_SEARCH, searchMovies)
];

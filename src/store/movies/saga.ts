import { takeLatest, call, put, all } from "redux-saga/effects";
import { Types as MoviesTypes, Creators as MoviesActions } from "./duck";
import { get } from "lodash";

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
      // const response = getRatings({ imdbId: movies.imdbID });
      /*const response: any = call(getRatings, {
        imdbId: movies.imdbID
      });*/

      return {
        title: movies.Title,
        year: movies.Year,
        imdbId: movies.imdbID,
        poster: movies.Poster === "N/A" ? 'https://via.placeholder.com/300x380?text=Image+not+found' : movies.Poster,
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

function* getRatings({ imdbId }): any {
  try {
    const response = yield call(api.get, "", {
      params: {
        i: imdbId
      }
    });

    const ratings = get(response.data, "Ratings", []);
    let total = 0;
    let imdb;
    let rottenTomatoes;
    let metacritic;

    ratings.map(rating => {
      switch (rating.Source) {
        case "Internet Movie Database":
          imdb = rating.Value;
          imdb = parseFloat(imdb.split("/")[0]);
          total = total + imdb * 10;
          break;
        case "Rotten Tomatoes":
          rottenTomatoes = rating.Value;
          rottenTomatoes = parseFloat(rottenTomatoes.slice(0, -1));
          total = total + rottenTomatoes;
          break;
        case "Metacritic":
          metacritic = rating.Value;
          metacritic = parseFloat(metacritic.split("/")[0]);
          total = total + metacritic;
          break;
      }
    });
    total = Math.round(total / ratings.length);
    console.log(total);
    return { imdb, rottenTomatoes, metacritic, total };
  } catch (e) {}
}

export default [
  // @ts-ignore
  takeLatest(MoviesTypes.START_SEARCH, searchMovies)
];

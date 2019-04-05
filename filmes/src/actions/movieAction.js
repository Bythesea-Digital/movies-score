import api from '../services/api';
import { FETCH_MOVIES, FETCH_ONE_MOVIE, GET_RATINGS } from './types';
import { get } from 'lodash';

export const fetchMovies = (s, y) => dispatch => {
  api.get('', {
    params: {
      s,
      y,
    }
  })
    .then(movies => dispatch({
      type: FETCH_MOVIES,
      payload: movies
    }))
};

export const getRatings = (movieInfo) => dispatch => {
  const data = movieInfo;
  api.get('', {
    params:
      {
        i: data.imdbID
      }
  })
    .then(filme => {
      const ratings = get(filme.data, 'Ratings', []);
      let rating = 0;

      ratings.map((r) => {
        switch (r.Source) {
          case 'Internet Movie Database':
            let imdb = r.Value;
            imdb = parseFloat(imdb.split('/')[0]);
            rating = rating + imdb * 10;
            break;
          case 'Rotten Tomatoes':
            let rotten = r.Value;
            rotten = parseFloat(rotten.slice(0, -1));
            rating = rating + rotten;
            break;
          case 'Metacritic':
            let meta = r.Value;
            meta = parseFloat(meta.split('/')[0]);
            rating = rating + meta;
            break;
        }
      });
      rating = Math.round(rating / ratings.length);
      movieInfo['OverallRating'] = `${rating}`;

      dispatch({
        type: GET_RATINGS,
        payload: movieInfo
      })

    })

};

export const fetchOneMovie = (i) => dispatch => {
  api.get('', {
    params:
      {
        i
      }
  })
    .then(movie => dispatch({
      type: FETCH_ONE_MOVIE,
      payload: movie
    }))
};

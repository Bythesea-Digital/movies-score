import { Creators as MoviesActions, Movie, SearchType } from "./duck";
import { get } from "lodash";
import api from "../../services/api";

export function searchMovies({ searchTerm, year }: SearchType) {
  return function(dispatch) {
    dispatch(MoviesActions.startSearch());
    return api
      .get("", {
        params: {
          s: searchTerm,
          y: year
        }
      })
      .then(async response => {
        const formattedMovies = await formatMovies({
          apiResponse: response.data.Search
        });
        console.log(formattedMovies);
        dispatch(MoviesActions.searchSuccess(formattedMovies));
      });
  };
}

async function formatMovies({ apiResponse }) {
  return await apiResponse.map(
    async (movies): Promise<Movie> => {
      const { imdb, metacritic, rottenTomatoes, total } = await getRatings({
        imdbId: movies.imdbID
      });
      console.log(imdb);
      return {
        title: movies.Title,
        year: movies.Year,
        imdbId: movies.imdbID,
        poster: movies.Poster,
        type: movies.Type,
        rating: {
          imdb,
          metacritic,
          rottenTomatoes,
          total
        }
      };
    }
  );
}

const getRatings = async ({ imdbId }): Promise<any> => {
  try {
    const response = await api.get("", {
      params: {
        i: imdbId
      }
    });

    const ratings = get(response.data, "Ratings", []);
    let total = 0;
    let imdb;
    let rottenTomatoes;
    let metacritic;

    ratings.forEach(rating => {
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

    return { imdb, rottenTomatoes, metacritic, total };
  } catch (e) {}
};

// function getTotalRating({ imdb, rottenTomatoes }) {}

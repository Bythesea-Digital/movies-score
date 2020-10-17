import React from "react";
import { AppState, SearchType, Movie } from "../../store/movies/duck";
import { APP_VERSION } from "../../helpers/consts";
import { Container, Header } from "./styles";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";

type Props = {
  movies: Movie[];
  appState: keyof typeof AppState;
};

export default function Movies({ movies, appState }: Props): JSX.Element {
  return (
    <>
      <Header>
        <span className="app-version">{APP_VERSION}</span>
        <h1 className="title">GoMovies</h1>
        <p className="subtitle">
          Search for your favourite movie and view its score!
        </p>
      </Header>
      <SearchBar />
      <Container>
        {movies &&
          movies.map(movie => (
            <MovieCard
              key={movie.imdbId}
              title={movie.title}
              year={movie.year}
              imdbId={movie.imdbId}
              type={movie.imdbId}
              poster={movie.poster}
              rating={movie.rating}
            />
          ))}
      </Container>

      {/*<section className="hero is-medium is-primary is-bold">
            <div className="hero-body">
                <div className="container">
                    <span className="tag is-rounded">{APP_VERSION}</span>
                    <h1 className="title">
                        GoMovie
                    </h1>
                    <h2 className="subtitle">
                        Search for your favourite movie and view its score!
                    </h2>
                    <div className="level">
                        <div className="level-left">
                            <input type="text" className="input is-rounded"/>

                        </div>
                    </div>
                </div>
            </div>
        </section>*/}
    </>
  );
}

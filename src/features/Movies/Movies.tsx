import React from "react";
import {AppState, SearchType, Movie} from "../../store/movies/duck";
import {APP_VERSION} from "../../helpers/consts";
import {Container, Header} from "./styles";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";
import {motion} from "framer-motion"


type Props = {
    movies: Movie[];
    appState: keyof typeof AppState;
};

export default function Movies({movies, appState}: Props): JSX.Element {
    const isFetching = appState === AppState.FETCHING
    const hasMovies = movies.length || isFetching;

    const variants = {
        hidden: {
            opacity: 0,
            translateY: 100,
        },
        visible: {
            opacity: 1,
            translateY: 0,
            transition: {
                type: 'spring',
                staggerChildren: 0.1,
                delayChildren: 2
            }
        }
    }

    const renderMoviesSkeleton = (
        <Container>
            <MovieCard key={0} title="" year="" imdbId="" type="" poster="" rating="" loading={true}/>
            <MovieCard key={1} title="" year="" imdbId="" type="" poster="" rating="" loading={true}/>
            <MovieCard key={2} title="" year="" imdbId="" type="" poster="" rating="" loading={true}/>
        </Container>
    )
    return (
        <>
            <Header haveMovies={hasMovies}>
                <motion.div variants={variants} initial="hidden" animate="visible">
                    <span className="app-version">{APP_VERSION}</span>
                    <h1 className="title">GoMovies</h1>
                    <p className="subtitle">
                        Search for your favourite movie or show!
                    </p>
                    <SearchBar/>
                </motion.div>
            </Header>
            {isFetching ? renderMoviesSkeleton : null}
            {movies.length ? (
                <Container>
                    {movies.map(movie => (
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
            ) : null}

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

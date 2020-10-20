import React from "react";
import {AppState, SearchType, Movie} from "../../store/movies/duck";
import {APP_VERSION} from "../../helpers/consts";
import {Container, Header} from "./styles";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";
import {AnimatePresence, motion} from "framer-motion"


type Props = {
    movies: Movie[];
    appState: keyof typeof AppState;
};

export const fatherVariants = {
    hidden: {
        opacity: 0,
        translateY: 100,
    },
    visible: {
        opacity: 1,
        translateY: 0,
        transition: {
            type: 'spring',
            // mass: 1,
            // damping: 5.2,
            staggerChildren: 0.07,
            delayChildren: 0.2,
            // stiffness: 100
        }
    },
    exit: {
        opacity: 0,
    }
}

export const childrenVariants = {
    hidden: {
        y: 50,
        opacity: 0,
        transition: {
            y: {
                stiffness: 1000,
            }
        }
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            y: {
                stiffness: 1000,
                velocity: -100
            }
        }
    },
    exit: {
        opacity: 0,
        y: 50
    }
}

export default function Movies({movies, appState}: Props): JSX.Element {
    const isFetching = appState === AppState.FETCHING
    const isError = appState === AppState.ERROR;
    const renderMoviesSkeleton = (
        <motion.div variants={fatherVariants} initial="hidden" animate="visible" exit="exit">
            <Container>
                <MovieCard key={0} title="" year="" imdbId="" type="" poster="" rating="" loading={true}/>
                <MovieCard key={1} title="" year="" imdbId="" type="" poster="" rating="" loading={true}/>
                <MovieCard key={2} title="" year="" imdbId="" type="" poster="" rating="" loading={true}/>
            </Container>
        </motion.div>
    )
    return (
        <>
            <Header>
                <motion.div variants={fatherVariants} initial="hidden" animate="visible">
                    <motion.span variants={childrenVariants} className="app-version">{APP_VERSION}</motion.span>
                    <motion.h1 variants={childrenVariants} className="title">GoMovies</motion.h1>
                    <motion.p variants={childrenVariants} className="subtitle">
                        Search for your favourite movie or show!
                    </motion.p>
                    <motion.div variants={childrenVariants}>
                        <SearchBar/>
                    </motion.div>
                {isError ? <p className="error">Not found!</p> : null}
                </motion.div>
                {isFetching ? renderMoviesSkeleton : null}
                <AnimatePresence>
                    {movies.length ? (
                        <motion.div variants={fatherVariants} initial="hidden" animate="visible" exit="exit">
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
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            </Header>
        </>
    );
}

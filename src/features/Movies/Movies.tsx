import React from "react";
import {AppState, Movie} from "../../store/movies/duck";
import {APP_VERSION} from "../../helpers/consts";
import {CardsContainer, Container} from "./styles";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";
import {motion} from 'framer-motion';
import NotFoundHand from "../../assets/hands/not-found.png";

type Props = {
    movies: Movie[];
    appState: keyof typeof AppState;
};

export const fatherVariants = {
    hidden: {
        opacity: 0,
        translateY: 100
    },
    visible: {
        opacity: 1,
        translateY: 0,
        transition: {
            type: 'spring',
            mass: 1,
            damping: 6,
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
}

export const childrenVariants = {
    hidden: {
        y: 50,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1
    }
}

export default function Movies({movies, appState}: Props): JSX.Element {
    const isFetching = appState === AppState.FETCHING;
    const isError = appState === AppState.ERROR;


    const renderMovieSkeleton = (
        <motion.div variants={fatherVariants} initial="hidden" animate="visible">
            <CardsContainer>
                <MovieCard key={0} title="" year="" imdbId="" type="" poster="" rating="" loading={true}/>
                <MovieCard key={1} title="" year="" imdbId="" type="" poster="" rating="" loading={true}/>
                <MovieCard key={2} title="" year="" imdbId="" type="" poster="" rating="" loading={true}/>
            </CardsContainer>
        </motion.div>
    )

    return (
            <Container>
                <motion.div variants={fatherVariants} initial="hidden" animate="visible">
                    <motion.span variants={childrenVariants} className="app-version">
                        {APP_VERSION}
                    </motion.span>
                    <motion.h1 variants={childrenVariants} className="title">
                        GoMovies
                    </motion.h1>
                    <motion.p variants={childrenVariants} className="subtitle">
                        Search for your favourite movie or show!
                    </motion.p>
                    <motion.div variants={childrenVariants}>
                        <SearchBar/>
                    </motion.div>
                    {isError ? (
                        <motion.p className="error">
                            <img src={NotFoundHand} alt="Not found"/>
                        </motion.p>
                    ) : null}
                </motion.div>


                {isFetching ? renderMovieSkeleton : null}
                {movies.length ? (
                    <motion.div variants={fatherVariants} initial="hidden" animate="visible">
                        <CardsContainer>
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
                        </CardsContainer>
                    </motion.div>
                ) : null}
            </Container>
    );
}

import {createActions, createReducer} from 'reduxsauce';

export const { Types, Creators } = createActions({
    startSearch: ['searchTerm']
})
/*export enum Types {
    SEARCH_START = 'SEARCH_START',
    SEARCH_SUCCESS = 'SEARCH_SUCCESS',
    SEARCH_ERROR = 'SEARCH_ERROR',
}*/

export type Movie = {
    title: string;
    year: string;
    imdbId: string;
    type: string;
    poster: string;
    rating : {
        imdb: number;
        rottenTomatoes: number;
        total: number
    }
}

enum AppState {
    FETCHING= 'FETCHING',
    SUCCESS ='SUCCESS',
    ERROR= 'ERROR'
}

interface MoviesInitialState {
    appState: null | keyof typeof AppState,
    moviesList: Movie[],
    selectedMovie: Movie
}


const initialState: MoviesInitialState = {
    appState: null,
    moviesList: [] as Movie[],
    selectedMovie: {} as Movie
}

const start = (state: typeof initialState = initialState, action) => ({
    ...state, appState: AppState.FETCHING
})

/*export default (state: typeof initialState = initialState, action: Action): typeof initialState => {
    switch (action.type){
        case Types.SEARCH_START:
            return {...state, state: AppState.FETCHING}
        default:
            return state
    }
}*/

/*
export type StartFetching = {
    searchTerm: string;
}

export const startFetching = ({searchTerm}: StartFetching) => ({
    type: Types.SEARCH_START,
    payload: searchTerm
} as const)

type Action = ReturnType<
    | typeof startFetching
    >
*/

export default createReducer(initialState, {
    [Types.START_SEARCH]: start,
})
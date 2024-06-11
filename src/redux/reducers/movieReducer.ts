import { FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_FAILURE, CREATE_MOVIE_SUCCESS, CREATE_MOVIE_FAILURE } from '../actions/types';

const initialState = {
  movies: [],
  movie: null,
  error: null,
};

const movieReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return { ...state, movies: action.payload };
    case FETCH_MOVIES_FAILURE:
      return { ...state, error: action.payload };
    case FETCH_MOVIE_SUCCESS:
      return { ...state, movie: action.payload };
    case FETCH_MOVIE_FAILURE:
      return { ...state, error: action.payload };
    case CREATE_MOVIE_SUCCESS:
      return { ...state, movies: [...state.movies, action.payload] };
    case CREATE_MOVIE_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default movieReducer;

import { FETCH_MOVIES_REQUEST, FETCH_MOVIE_REQUEST, CREATE_MOVIE_REQUEST } from './types';

export const fetchMoviesRequest = () => ({
  type: FETCH_MOVIES_REQUEST,
});

export const fetchMovieRequest = (id: string) => ({
  type: FETCH_MOVIE_REQUEST,
  payload: id,
});

export const createMovieRequest = (movie: { title: string; description: string; directorId: string }) => ({
  type: CREATE_MOVIE_REQUEST,
  payload: movie,
});

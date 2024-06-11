import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMoviesRequest } from '../redux/actions/movieActions';
import { RootState } from '../redux/reducers';

const MoviesPage: React.FC = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.movies.movies);
  const error = useSelector((state: RootState) => state.movies.error);

  useEffect(() => {
    dispatch(fetchMoviesRequest());
  }, [dispatch]);

  return (
    <div>
      <h2>Movies</h2>
      {error && <p>{error}</p>}
      <ul>
        {movies.map((movie: any) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/movies/create">Create New Movie</Link>
    </div>
  );
};

export default MoviesPage;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovieRequest } from '../redux/actions/movieActions';
import { RootState } from '../redux/reducers';

const SingleMoviePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const movie = useSelector((state: RootState) => state.movies.movie);
  const error = useSelector((state: RootState) => state.movies.error);

  useEffect(() => {
    if (id) {
      dispatch(fetchMovieRequest(id));
    }
  }, [dispatch, id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SingleMoviePage;

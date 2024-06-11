import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchDirectorRequest } from '../redux/actions/directorActions';
import { RootState } from '../redux/reducers';

const SingleDirectorPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const director = useSelector((state: RootState) => state.directors.director);
  const error = useSelector((state: RootState) => state.directors.error);

  useEffect(() => {
    if (id) {
      dispatch(fetchDirectorRequest(id));
    }
  }, [dispatch, id]);

  if (!director) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{director.firstName} {director.lastName}</h2>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SingleDirectorPage;

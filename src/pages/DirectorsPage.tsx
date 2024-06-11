import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDirectorsRequest } from '../redux/actions/directorActions';
import { RootState } from '../redux/reducers';

const DirectorsPage: React.FC = () => {
  const dispatch = useDispatch();
  const directors = useSelector((state: RootState) => state.directors.directors);
  const error = useSelector((state: RootState) => state.directors.error);

  useEffect(() => {
    dispatch(fetchDirectorsRequest());
  }, [dispatch]);

  return (
    <div>
      <h2>Directors</h2>
      {error && <p>{error}</p>}
      <ul>
        {directors.map((director: any) => (
          <li key={director.id}>
            <Link to={`/directors/${director.id}`}>{director.firstName} {director.lastName}</Link>
          </li>
        ))}
      </ul>
      <Link to="/directors/create">Create New Director</Link>
    </div>
  );
};

export default DirectorsPage;

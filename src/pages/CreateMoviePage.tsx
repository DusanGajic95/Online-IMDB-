import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createMovieRequest } from '../redux/actions/movieActions';
import { RootState } from '../redux/reducers';

const CreateMoviePage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [directorId, setDirectorId] = useState('');
  const dispatch = useDispatch();
  const error = useSelector((state: RootState) => state.movies.error);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createMovieRequest({ title, description, directorId }));
  };

  return (
    <div>
      <h2>Create New Movie</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
        <div>
          <label>Director ID:</label>
          <input type="text" value={directorId} onChange={(e) => setDirectorId(e.target.value)} />
        </div>
        <button type="submit">Create</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default CreateMoviePage;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createDirectorRequest } from '../redux/actions/directorActions';
import { RootState } from '../redux/reducers';

const CreateDirectorPage: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const dispatch = useDispatch();
  const error = useSelector((state: RootState) => state.directors.error);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createDirectorRequest({ firstName, lastName }));
  };

  return (
    <div>
      <h2>Create New Director</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <button type="submit">Create</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default CreateDirectorPage;

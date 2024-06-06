import React, { useState, useEffect } from 'react';

interface Director {
  id: number;
  name: string;
}

const DirectorsPage: React.FC = () => {
  const [directors, setDirectors] = useState<Director[]>([]);

  useEffect(() => {
    fetchDirectors();
  }, []);

  const fetchDirectors = async () => {
    try {
      const response = await fetch('https://vivifyacademy-movie-api.vivifyideas.com/api/directors');
      if (!response.ok) {
        throw new Error('Failed to fetch directors');
      }
      const data = await response.json();
      setDirectors(data.directors);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDirectorClick = (id: number) => {
    window.location.href = `/directors/${id}`;
  };

  return (
    <div>
      <h2>Directors</h2>
      {directors.map(director => (
        <div key={director.id} onClick={() => handleDirectorClick(director.id)}>
          <p>{director.name}</p>
        </div>
      ))}
    </div>
  );
};

export default DirectorsPage;


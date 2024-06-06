import React, { useState, useEffect } from 'react';

interface Movie {
  id: number;
  name: string;
  director: string;
}

const MoviesPage: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch('https://vivifyacademy-movie-api.vivifyideas.com/api/movies');
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      const data = await response.json();
      setMovies(data.movies);
    } catch (error) {
      console.error(error);
    }
  };

  const handleMovieClick = (id: number) => {
    
    const movieUrl = `/movies/${id}`;
    
    window.history.replaceState(null, '', movieUrl);
    
    window.location.reload();
  };

  return (
    <>
      <h2>Movies</h2>
     
      {movies && movies.map(movie => (
  <div key={movie.id} onClick={() => handleMovieClick(movie.id)}>
    <p>{movie.name}</p>
    <p>{movie.director}</p>
  </div>
))}

    </>
  );
};

export default MoviesPage;


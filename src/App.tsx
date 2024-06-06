import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoviesPage from './components/movies/MoviesPage';
import AddMoviePage from './components/movies/AddMoviePage';
import DirectorsPage from './components/movies/DirectorsPage';
import AddDirectorPage from './components/movies/AddDirectorPage';
import Login from './components/movies/Login';
import Register from './components/movies/Register';
import Layout from './components/movies/Layout';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MoviesPage />} />
          <Route path="/movies/create" element={<AddMoviePage history={undefined} />} />
          <Route path="/directors" element={<DirectorsPage />} />
          <Route path="/directors/create" element={<AddDirectorPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MoviesPage from './pages/MoviesPage';
import SingleMoviePage from './pages/SingleMoviePage';
import DirectorsPage from './pages/DirectorsPage';
import SingleDirectorPage from './pages/SingleDirectorPage';
import CreateMoviePage from './pages/CreateMoviePage';
import CreateDirectorPage from './pages/CreateDirectorPage';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<SingleMoviePage />} />
          <Route path="/movies/create" element={<CreateMoviePage />} />
          <Route path="/directors" element={<DirectorsPage />} />
          <Route path="/directors/:id" element={<SingleDirectorPage />} />
          <Route path="/directors/create" element={<CreateDirectorPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <h1>Online IMDB</h1>
      <nav>
        <ul>
          <li><Link to="/">Movies</Link></li>
          <li><Link to="/movies/create">Add Movie</Link></li>
          <li><Link to="/directors">Directors</Link></li>
          <li><Link to="/directors/create">Add Director</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </nav>
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;



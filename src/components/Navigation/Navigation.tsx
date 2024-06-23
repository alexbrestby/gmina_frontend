import React from 'react';
import { Link } from 'react-router-dom';
import classes from './nav.module.css';

interface HeaderProps {
  isLoggedIn: boolean;
  username: string;
  handleLogin: () => void;
  handleLogout: () => void;
}

const Navigation: React.FC<HeaderProps> = ({ isLoggedIn, handleLogin, handleLogout, username }) => {
  return (
    <nav>
      <ul className={classes.nav}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/archive">Archive</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        {isLoggedIn ? (
          <li onClick={handleLogout}>Logout<span>{username}</span></li>
        ) : (
          <li onClick={handleLogin}>Login</li>
        )}
      </ul>
    </nav >
  );
};

export default Navigation;






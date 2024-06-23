import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import classes from './header.module.css';

interface HeaderProps {
  isLoggedIn: boolean;
  username: string;
  handleLogin: () => void;
  handleLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, username, handleLogin, handleLogout }) => {
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>
          <img src="./logo.svg" alt="logo" />
          <h1>InFamily</h1>
        </div>
      </Link>
      <Navigation isLoggedIn={isLoggedIn} username={username} handleLogin={handleLogin} handleLogout={handleLogout} />
    </header>
  );
};

export default Header;

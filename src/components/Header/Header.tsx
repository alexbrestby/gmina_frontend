import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import classes from './header.module.css';

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>
          <img src="./logo.svg" alt="logo" />
          <h1>InFamily</h1>
        </div>
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;

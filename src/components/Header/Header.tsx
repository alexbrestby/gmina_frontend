import React from 'react';
import Navigation from '../Navigation/Navigation';
import classes from './header.module.css';

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <h1>My Archive Site</h1>
      <Navigation />
    </header>
  );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import classes from './nav.module.css';

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className={classes.nav}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/archive">Archive</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
    </nav >
  );
};

export default Navigation;

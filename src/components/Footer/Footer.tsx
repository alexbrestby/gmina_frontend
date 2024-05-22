import React from 'react';
import classes from './footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <p>&copy; 2024 My Archive Site. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

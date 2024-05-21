import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import classes from './app.module.css'

const App: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default App;

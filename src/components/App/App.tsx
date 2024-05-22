import React from 'react';
import { Outlet } from 'react-router-dom';
import classes from './app.module.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const App: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <main className={classes.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;

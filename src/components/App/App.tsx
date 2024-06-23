import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import classes from './app.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { login, logout } from '../../services/authService';
import { getAccessToken, getUserName } from '../../utils/storage';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUserName] = useState('');

  useEffect(() => {
    const token = getAccessToken();
    const user = getUserName();
    if (token) {
      setIsLoggedIn(true);
    }
    if (user) {
      setUserName(user);
    }
  }, []);

  const handleLogin = async () => {
    const success = await login('alex.brest.by@gmail.com', '123456');
    if (success) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = async () => {
    const success = await logout();
    if (success) {
      setIsLoggedIn(false);
    }
  };

  return (
    <div className={classes.wrapper}>
      <Header isLoggedIn={isLoggedIn} username={username} handleLogin={handleLogin} handleLogout={handleLogout} />
      <main className={classes.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;


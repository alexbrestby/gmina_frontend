import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import classes from './app.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AuthModal from '../AuthModalWindow/AuthModalWindow';
import useAuth from '../../hooks/useAuth';

const App: React.FC = () => {
  const { isLoggedIn, username, handleLogin, handleRegister, handleLogout } = useAuth();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={classes.wrapper}>
      <Header isLoggedIn={isLoggedIn} username={username} handleLogin={openModal} handleLogout={handleLogout} />
      <main className={classes.main}>
        <Outlet />
      </main>
      <Footer />
      <AuthModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        onLogin={handleLogin}
        onRegister={handleRegister}
      />
    </div>
  );
};

export default App;

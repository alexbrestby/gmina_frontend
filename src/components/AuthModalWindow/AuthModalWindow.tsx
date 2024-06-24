import React, { useState } from 'react';
import Modal from 'react-modal';
import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';
import classes from './authmodalwindow.module.css';

Modal.setAppElement('#root');

interface AuthModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onLogin: (email: string, password: string) => void;
  onRegister: (email: string, password: string, username: string) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onRequestClose, onLogin, onRegister }) => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm((prevIsLoginForm) => !prevIsLoginForm);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Auth Form"
      className={classes.modal}
    >
      {isLoginForm ? (
        <LoginForm key="loginForm" onClose={onRequestClose} onLogin={onLogin} />
      ) : (
        <RegisterForm key="registerForm" onClose={onRequestClose} onRegister={onRegister} />
      )}
      <div className={classes.switchButton} onClick={toggleForm}>
        {isLoginForm ? 'Регистрация' : 'Войти'}
      </div>
    </Modal>
  );
};

export default AuthModal;


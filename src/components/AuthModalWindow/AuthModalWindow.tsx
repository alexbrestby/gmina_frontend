import React, { useState } from 'react';
import Modal from 'react-modal';
import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';

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
    setIsLoginForm(!isLoginForm);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Auth Form"
    >
      {isLoginForm ? (
        <LoginForm onClose={onRequestClose} onLogin={onLogin} />
      ) : (
        <RegisterForm onClose={onRequestClose} onRegister={onRegister} />
      )}
      <button onClick={toggleForm}>
        {isLoginForm ? 'Switch to Register' : 'Switch to Login'}
      </button>
    </Modal>
  );
};

export default AuthModal;


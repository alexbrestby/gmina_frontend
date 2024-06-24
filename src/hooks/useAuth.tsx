import { useState, useEffect } from 'react';
import { login, register, logout } from '../services/authService';
import { getAccessToken, getUserName } from '../utils/storage';

const useAuth = () => {
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

  const handleLogin = async (email: string, password: string) => {
    const success = await login(email, password);
    if (success) {
      setIsLoggedIn(true);
      setUserName(getUserName() || '');
    }
  };

  const handleRegister = async (email: string, password: string, username: string) => {
    const sucess = await register(email, password, username);
    if (sucess) {
      console.log({ email, password, username });
    }
  };

  const handleLogout = async () => {
    const success = await logout();
    if (success) {
      setIsLoggedIn(false);
      setUserName('');
    }
  };

  return {
    isLoggedIn,
    username,
    handleLogin,
    handleRegister,
    handleLogout,
  };
};

export default useAuth;


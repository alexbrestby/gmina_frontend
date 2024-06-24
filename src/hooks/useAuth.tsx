import { useState, useEffect } from 'react';
import { login, logout } from '../services/authService';
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
    console.log({ email, password, username });
    handleLogin(email, password);
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


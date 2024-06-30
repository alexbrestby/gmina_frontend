import { useState, useEffect } from 'react';
import authService from '../services/authService';
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
    const response = await authService.login(email, password);
    if (response) {
      console.log(response);
      setIsLoggedIn(true);
      setUserName(getUserName() || '');
    }
  };

  const handleRegister = async (email: string, password: string, username: string) => {
    const response = await authService.register(email, password, username);
    if (response) {
      console.log(response);
    }
  };

  const handleLogout = async () => {
    const response = await authService.logout();
    if (response) {
      console.log(response);
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


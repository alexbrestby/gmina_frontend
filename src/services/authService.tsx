import { AxiosResponse } from "axios";
import $api from "../http/api";
import { LoginResponse, RegisterResponse, LogoutResponse } from "../models/IResponse";


class AuthService {

  /**
   * Authenticates the user with the provided email and password.
   *
   * @param {string} email - The email of the user.
   * @param {string} password - The password of the user.
   * @returns {Promise<AxiosResponse<LoginResponse>>} - Returns a promise response. 
   * @throws Will throw an error if the login fails.
   */
  public static login = async (email: string, password: string): Promise<AxiosResponse<LoginResponse>> => {
    try {
      const response = await $api.post('/user/login', { email, password });
      if (response.status === 200) {
        const { accessToken } = response.data.tokens;
        const { username } = response.data.user;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('username', username);
        return response.data;
      } else {
        throw new Error('Login failed');
      }
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.message) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error('Login failed');
      }
    }
  };

  /**
   * Registers a new user with the provided email, password, and username.
   *
   * @param {string} email - The email of the user.
   * @param {string} password - The password of the user.
   * @param {string} username - The username of the user.
   * @returns {Promise<AxiosResponse<RegisterResponse>>} - Returns a promise response.
   * @throws Will throw an error if the registration fails.
   */
  public static register = async (email: string, password: string, username: string): Promise<AxiosResponse<RegisterResponse>> => {
    try {
      const response = await $api.post('/user/register', { email, password, username });

      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error('Registration failed');
      }
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.message) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error('Registration failed');
      }
    }
  };

  /**
   * Logs out the currently authenticated user.
   *
   * @returns {Promise<AxiosResponse<LogoutResponse>>} - Returns a promise response.
   */
  public static logout = async (): Promise<AxiosResponse<LogoutResponse>> => {
    try {
      const response = await $api.post('/user/logout');

      if (response.status === 200) {
        localStorage.removeItem('accessToken');
        return response.data;
      } else {
        throw new Error('Logout failed');
      }
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.message) {
        throw new Error('Logout failed');
      } else {
        throw new Error('An unexpected error occurred');
      }
    }
  };
};

export default AuthService;

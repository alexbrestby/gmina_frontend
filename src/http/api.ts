import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
import { getAccessToken } from '../utils/storage';

const $api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

$api.interceptors.request.use(
  (config: AxiosRequestConfig): InternalAxiosRequestConfig => {
    const internalConfig = config as InternalAxiosRequestConfig;
    const token = getAccessToken();
    if (token) {
      config.headers = {
        ...internalConfig.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return internalConfig;
  },
  (error) => {
    return Promise.reject(error);
  });
export default $api;

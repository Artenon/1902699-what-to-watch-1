
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { getUser } from './user';

const BASE_URL = 'https://10.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config: AxiosRequestConfig) => {
    const user = getUser();

    if (user) {
      config.headers['X-Token'] = user.token;
    }

    return config;
  });

  return api;
};

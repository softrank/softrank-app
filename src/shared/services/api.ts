import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { store } from 'shared/store';

axios.defaults.baseURL = 'http://localhost:3002/api';

axios.interceptors.request.use((config) => {
  const state = store.getState();
  const authToken = state.auth.authToken;
  if (authToken) config.headers.Authorization = `Bearer ${authToken}`;
  return config;
});

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

export const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  postFile: <T>(
    url: string,
    body: {},
    config: AxiosRequestConfig = fileConfig
  ) => axios.post<T>(url, body, config).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
  postWithoutBody: <T>(url: string) => axios.post<T>(url).then(responseBody),
};

const fileConfig = {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
};

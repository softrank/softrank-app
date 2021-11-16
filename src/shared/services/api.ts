import axios, { AxiosResponse } from 'axios';
import { store } from 'shared/store';

axios.defaults.baseURL = 'http://localhost:3001/api';

const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

axios.interceptors.response.use(async (response) => {
  try {
    await sleep(500);
    return response;
  } catch (error) {
    return await Promise.reject(error);
  }
});

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
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

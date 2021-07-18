import axios, { AxiosResponse } from 'axios';
import { ModelEntity } from '../models/modelEntity';

axios.defaults.baseURL = 'http://localhost:4000/api';

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Models = {
  list: () => requests.get<ModelEntity[]>('/models'),
  details: (id: string) => requests.get<ModelEntity>(`/models/${id}`),
  create: (model: ModelEntity) => requests.post<void>('/models', model),
  update: (model: ModelEntity) =>
    requests.put<void>(`/models/${model.id}`, model),
  delete: (id: string) => requests.del<void>(`/models/${id}`),
};

const agent = {
  Models,
};

export default agent;

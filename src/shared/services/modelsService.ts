import { ModelEntity } from '../models/modelEntity';
import { requests } from './api';

const modelsController: string = '/models';

export const modelsService = {
  list: () => requests.get<ModelEntity[]>(modelsController),
  details: (id: string) =>
    requests.get<ModelEntity>(`${modelsController}/${id}`),
  create: (model: ModelEntity) => requests.post<void>(modelsController, model),
  update: (model: ModelEntity) =>
    requests.put<void>(`${modelsController}/${model.id}`, model),
  delete: (id: string) => requests.del<void>(`${modelsController}/${id}`),
};

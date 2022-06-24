import { ModelDto } from 'shared/dtos/modelDto';
import { ModelEntity } from '../models/modelEntity';
import { requests } from './api';

const modelsController: string = '/models';

export const modelsService = {
  list: () => requests.get<ModelEntity[]>(modelsController),
  details: (id: string) =>
    requests.get<ModelEntity>(`${modelsController}/${id}`),
  create: (model: ModelDto) =>
    requests.post<ModelEntity>(modelsController, model),
  update: (model: ModelDto) =>
    requests.put<ModelEntity>(`${modelsController}/${model.id}`, model),
  delete: (id: string) => requests.del<void>(`${modelsController}/${id}`),
  updateCapacities: (id: string, data: any) =>
    requests.put<ModelEntity>(`${modelsController}/${id}`, data),
};

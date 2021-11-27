import { requests } from './api';
import { User } from 'shared/models/user';
import { EvaluatorDto } from 'shared/dtos/evaluatorDto';

const authController: string = '/evaluators';

export const evaluatorService = {
  create: (evaluator: EvaluatorDto) =>
    requests.post<void>(authController, evaluator),
  get: (token: any) => requests.get<User>(`${authController}/me`),
};

import { requests } from './api';
import { Evaluator } from 'shared/models/evaluator';
import { User } from 'shared/models/user';

const authController: string = '/evaluators';

export const evaluatorService = {
  create: (evaluator: Evaluator) =>
    requests.post<void>(authController, evaluator),
  get: (token: any) => requests.get<User>(`${authController}/me`),
};

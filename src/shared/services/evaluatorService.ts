import { requests } from './api';
import { User } from 'shared/Types/user';
import { EvaluatorDto } from 'shared/dtos/evaluatorDto';
import { Evaluator } from 'shared/Types/evaluator';
import { Evalutation } from 'shared/Types/evaluation';

const evaluatorController: string = '/evaluators';

export const evaluatorService = {
  create: (evaluator: EvaluatorDto) =>
    requests.post<void>(evaluatorController, evaluator),
  get: () => requests.get<User>(`${evaluatorController}/me`),
  list: (evaluationInstitutionId: string) =>
    requests.get<Evaluator[]>(
      `${evaluatorController}?evaluationInstitutionId=${evaluationInstitutionId}`
    ),
  getEvaluations: () =>
    requests.get<Evalutation[]>(`${evaluatorController}/evaluations`),
  listAll: () => requests.get<Evaluator[]>(`${evaluatorController}`),
};

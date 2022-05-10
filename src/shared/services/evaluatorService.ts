import { requests } from './api';
import { User } from 'shared/models/user';
import { EvaluatorDto } from 'shared/dtos/evaluatorDto';
import { Evaluator } from 'shared/models/evaluator';
import { Evalutation } from 'shared/models/evaluation';

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
};

import { EvalutationDto } from 'shared/dtos/evaluationDto';
import { Evalutation } from 'shared/models/evaluation';
import { EvaluationProcess } from 'shared/models/evaluationProcess';
import { Indicators } from 'shared/models/indicators';
import { requests } from './api';

const evaluationController: string = '/evaluation';

export const evaluationService = {
  create: (evaluation: EvalutationDto) =>
    requests.post<Evalutation>(evaluationController, evaluation),
  getById: (id: string) => requests.get<any>(`${evaluationController}/${id}`),
  getIndicators: (id: string) =>
    requests.get<Indicators>(`${evaluationController}/${id}/indicators`),
  getProcesses: (id: string) =>
    requests.get<EvaluationProcess[]>(
      `${evaluationController}/${id}/processes`
    ),
};

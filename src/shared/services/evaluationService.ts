import { EvalutationDto } from 'shared/dtos/evaluationDto';
import { Evalutation } from 'shared/models/evaluation';
import { EvaluationDetails } from 'shared/models/evaluationDetails';
import { EvaluationProcess } from 'shared/models/evaluationProcess';
import { EvalutionResponse } from 'shared/models/evaluationResponse';
import { Improvement } from 'shared/models/improvement';
import { Indicators } from 'shared/models/indicators';
import { requests } from './api';

const evaluationController: string = '/evaluation';

export const evaluationService = {
  create: (evaluation: EvalutationDto) =>
    requests.post<Evalutation>(evaluationController, evaluation),
  getById: (id: string) =>
    requests.get<EvaluationDetails>(`${evaluationController}/${id}`),
  getIndicators: (id: string) =>
    requests.get<Indicators>(`${evaluationController}/${id}/indicators`),
  getProcesses: (id: string) =>
    requests.get<EvaluationProcess[]>(
      `${evaluationController}/${id}/processes`
    ),
  list: () => requests.get<EvalutionResponse[]>(`${evaluationController}`),
  getImprovements: (id: string) =>
    requests.get<Improvement[]>(`${evaluationController}/${id}/adjustments`),
};

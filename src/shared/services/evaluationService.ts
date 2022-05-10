import { EvalutationDto } from 'shared/dtos/evaluationDto';
import { Evalutation } from 'shared/models/evaluation';
import { Indicators } from 'shared/models/indicators';
import { requests } from './api';

const evaluationController: string = '/evaluation';

export const evaluationService = {
  create: (evaluation: EvalutationDto) =>
    requests.post<Evalutation>(evaluationController, evaluation),
  getIndicators: (id: string) =>
    requests.get<Indicators>(`${evaluationController}/${id}/indicators`),
};

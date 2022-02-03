import { EvalutationDto } from 'shared/dtos/evaluationDto';
import { Evalutation } from 'shared/models/evaluation';
import { requests } from './api';

const evaluationController: string = '/evaluation';

export const evaluationService = {
  create: (evaluation: EvalutationDto) =>
    requests.post<Evalutation>(evaluationController, evaluation),
};

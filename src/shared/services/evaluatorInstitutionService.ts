import { EvaluatorInstitutionDto } from 'shared/dtos/evaluatorInstitutionDto';
import { EvaluatorInstitution } from 'shared/models/evaluatorInstitution';
import { requests } from './api';

const evaluatorInstitutionController: string = '/evaluator-institutions';

export const evaluatorInstitutionService = {
  list: () =>
    requests.get<EvaluatorInstitution[]>(evaluatorInstitutionController),
  create: (institution: EvaluatorInstitutionDto) =>
    requests.post<EvaluatorInstitution>(
      evaluatorInstitutionController,
      institution
    ),
};

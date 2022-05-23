import { requests } from './api';
import { ImprovementDto } from 'shared/dtos/improvementDto';

const improvementController: string = '/adjustments';

export const evaluatorService = {
  create: (improvement: ImprovementDto) =>
    requests.post<void>(improvementController, improvement),
};

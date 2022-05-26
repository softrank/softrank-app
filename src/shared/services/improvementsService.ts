import { requests } from './api';
import { ImprovementDto } from 'shared/dtos/improvementDto';

const improvementController: string = '/adjustments';

export const improvementsService = {
  create: (improvement: ImprovementDto) =>
    requests.post<void>(improvementController, improvement),
};

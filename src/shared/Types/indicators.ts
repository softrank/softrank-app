import { ModelLevel } from './modelLevel';

export interface Indicators {
  id: string;
  evaluationId: string;
  status: string;
  modelLevels: ModelLevel[];
}

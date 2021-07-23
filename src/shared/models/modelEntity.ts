import { ModelLevel } from './modelLevel';

export interface ModelEntity {
  id: string;
  name: string;
  year: Date;
  description: string;
  modelLevels: ModelLevel[];
}

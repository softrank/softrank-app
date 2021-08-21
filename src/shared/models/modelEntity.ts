import { ModelLevel } from './modelLevel';
import { Process } from './process';

export interface ModelEntity {
  id: string;
  name: string;
  year: Date | number;
  description: string;
  modelLevels: ModelLevel[];
  modelProcesses: Process[];
}

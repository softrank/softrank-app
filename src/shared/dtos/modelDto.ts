import { ModelLevelDto } from './modelLevelDto';
import { ProcessDto } from './processDto';

export interface ModelDto {
  id?: string;
  name: string;
  year: Date;
  description: string;
  modelLevels: ModelLevelDto[];
  modelProcesses?: ProcessDto[];
}

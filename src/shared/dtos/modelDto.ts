import { Process } from 'shared/models/process';
import { ModelLevelDto } from './modelLevelDto';

export interface ModelDto {
  id?: string;
  name: string;
  year: Date;
  description: string;
  modelLevels: ModelLevelDto[];
  modelProcesses?: Process[];
}

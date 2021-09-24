import { ModelLevel } from 'shared/models/modelLevel';
import { Process } from 'shared/models/process';

export interface ModelDto {
  id?: string;
  name: string;
  year: Date;
  description: string;
  modelLevels: ModelLevel[];
  modelProcesses?: Process[];
}

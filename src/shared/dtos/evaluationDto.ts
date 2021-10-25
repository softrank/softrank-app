import { ModelEntity } from 'shared/models/modelEntity';
import { ModelLevel } from 'shared/models/modelLevel';

export interface EvalutationDto {
  name: string;
  company: string;
  evaluatorInstitution: string;
  startDate: Date;
  endDate: Date;
  model: string;
  expectedLevel?: string;
}

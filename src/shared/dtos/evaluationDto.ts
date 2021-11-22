import { ModelEntity } from 'shared/models/modelEntity';
import { ModelLevel } from 'shared/models/modelLevel';

export interface EvalutationDto {
  name: string;
  company: string;
  startDate: Date;
  endDate: Date;
  model: string;
  expectedModelLevelId: string;
  evaluatorInstitutionId: string;
  organizationalUnitId: string;
  implementationInstitutionId: string;
  auditorId: string;
}

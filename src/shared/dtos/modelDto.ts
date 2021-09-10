import { ModelLevel } from 'shared/models/modelLevel';

export interface ModelDto {
  id?: string;
  name: string;
  year: Date;
  description: string;
  levels: ModelLevel[];
}

import { ModelLevel } from 'shared/models/modelLevel';

export interface CapacityDto {
  id?: string;
  name: string;
  type: 'O' | 'P';
  maxLevel: string;
  minLevel: string;
  modelId: string;
}

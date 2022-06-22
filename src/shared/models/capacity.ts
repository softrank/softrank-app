import { ModelLevel } from './modelLevel';

export interface Capacity {
  id: string;
  name: string;
  type: 'organizational' | 'project';
  maxLevel: ModelLevel;
  minLevel: ModelLevel;
}

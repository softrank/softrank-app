import { ModelLevel } from './modelLevel';

export interface ExpectedResult {
  id: string;
  initial: string;
  description: string;
  modelLevels?: string[];
}

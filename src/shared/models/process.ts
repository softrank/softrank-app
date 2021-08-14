import { ExpectedResult } from './expectedResult';

export interface Process {
  id: string;
  name: string;
  initial: string;
  description: string;
  expectedResults: ExpectedResult[];
}

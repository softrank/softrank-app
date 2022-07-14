import { ExpectedResultDto } from './expectedResultDto';

export interface ProcessDto {
  id?: string;
  name: string;
  initial: string;
  description: string;
  expectedResults: ExpectedResultDto[];
  type: string;
}

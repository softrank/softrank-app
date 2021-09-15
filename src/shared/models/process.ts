import { ExpectedResult } from './expectedResult';

export interface Process {
  id: string;
  name: string;
  initial: string;
  description: string;
  expectedResults: ExpectedResult[];
}

export class Process {
  constructor(
    public id: string = '',
    public name: string = '',
    public initial: string = '',
    public description: string = '',
    public expectedResults: ExpectedResult[] = [new ExpectedResult()]
  ) {}
}

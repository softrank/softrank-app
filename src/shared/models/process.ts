import { ExpectedResult } from './expectedResult';

export class Process {
  constructor(
    public id: string = '',
    public name: string = '',
    public initial: string = '',
    public description: string = '',
    public expectedResults: ExpectedResult[] = [new ExpectedResult()]
  ) {}
}

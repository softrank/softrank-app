import { ExpectedResult } from './expectedResult';

export class Process {
  constructor(
    public id: string = '',
    public name: string = '',
    public initials: string = '',
    public description: string = '',
    public expectedResults: ExpectedResult[] = [new ExpectedResult()]
  ) {}
}

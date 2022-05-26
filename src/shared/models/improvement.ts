export interface Improvement {
  id: string;
  problem: string;
  suggestion: string;
  expectedResult: ExpectedResult;
}

interface ExpectedResult {
  id: string;
  name: string;
  initial: string;
  modelProcess: Process;
  description: string;
}

interface Process {
  id: string;
  name: string;
  initial: string;
  description: string;
  type: string;
  model: any;
}

export interface EvaluationProcess {
  id: string;
  initial: string;
  name: string;
  expectedResults: EvaluationExpectedResult[];
}

interface EvaluationExpectedResult {
  id: string;
  expectedResultId: string;
  name: string;
  initial: string;
  description: string;
  indicators: any[];
}

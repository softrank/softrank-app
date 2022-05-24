import { Project } from './project';

export interface EvaluationProcess {
  id: string;
  initial: string;
  name: string;
  expectedResults: EvaluationExpectedResult[];
}

export interface EvaluationExpectedResult {
  id: string;
  expectedResultId: string;
  name: string;
  initial: string;
  description: string;
  indicators: EvaluationIndicator[];
}

interface EvaluationIndicator {
  id: string;
  name: string;
  qualityAssuranceGroup: string;
  files: IndicatorFile[];
}

interface IndicatorFile {
  id: string;
  mymetype: string;
  name: string;
  project: Project;
  source: string;
}

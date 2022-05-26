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
  indicators: Indicator[];
}

interface Indicator {
  id: string;
  name: string;
  qualityAssuranceGroup: string;
  evidenceSources: EvidenceSource[];
}

interface EvidenceSource {
  id: string;
  status: string;
  createdOn: string;
  files: File[];
  project: Project;
}

interface File {
  id: string;
  name: string;
  source: string;
  mymetype: string;
  status: string;
}

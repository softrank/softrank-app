import { Project } from './project';

export interface Indicator {
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
  project?: Project;
  modelProcess?: ModelProcess;
}

interface File {
  id: string;
  name: string;
  source: string;
  mymetype: string;
  status: string;
}

interface ModelProcess {
  id: string;
  initial: string;
  name: string;
  type: string;
  description: string;
}

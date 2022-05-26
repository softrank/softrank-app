import { ModelLevel } from './modelLevel';
import { Organization } from './organization';
import { Project } from './project';

export interface EvaluationDetails {
  id: string;
  name: string;
  implementationInstitution: string;
  start: Date;
  auditor: Member;
  evaluatorInstitution: Member;
  evaluators: Member[];
  end: Date;
  expectedModelLevel: ModelLevel;
  organizationalUnit: Organization;
  projects: Project[];
  state: string;
  plan: File;
  interviews: File[];
}

interface Member {
  id: string;
  memberId: string;
  type: string;
  name: string;
}

interface File {
  id: string;
  name: string;
  source: string;
}

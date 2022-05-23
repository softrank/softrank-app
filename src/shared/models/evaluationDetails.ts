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
}

interface Member {
  id: string;
  memberId: string;
  type: string;
  name: string;
}

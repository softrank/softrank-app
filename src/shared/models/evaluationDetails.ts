import { ModelLevel } from './modelLevel';
import { Organization } from './organization';
import { Project } from './project';

export interface EvaluationDetails {
  id: string;
  name: string;
  implementationInstitution: string;
  start: Date;
  auditor: Member;
  evaluatorInsitution: Member;
  evaluators: EvaluationEvaluator[];
  end: Date;
  expectedModelLevel: ModelLevel;
  organizationalUnit: Organization;
  projects: Project[];
  state: 'Aguardando aprovação' | 'Avaliação inicial' | 'Avaliação final';
  plan: File;
  interviews: File[];
}

interface Member {
  id: string;
  memberId: string;
  type: string;
  name: string;
}

export interface EvaluationEvaluator {
  id: string;
  memberId: string;
  type: 'evaluator_leader' | 'evaluator_adjunct';
  name: string;
}

interface File {
  id: string;
  name: string;
  source: string;
}

export interface EvaluationForm {
  organizationalUnitId: string;
  expectedModelLevelId: { value: null; label: null };
  auditorId: string;
  evaluatorInstitutionId: string;
  start: Date;
  end: Date;
  implementationInstitution?: string;
  name: string;
  evaluatorsIds: evaluator[];
  projects: project[];
  model: string;
  evaluationPlan?: any;
}

interface evaluator {
  id: string;
  evaluatorId: string;
}
interface project {
  id: string;
  name: string;
}

export interface EvalutationDto {
  name: string;
  start: Date;
  end: Date;
  evaluatorInstitutionId: string;
  organizationalUnitId: string;
  expectedModelLevelId: string;
  implementationInstitution?: string;
  auditorId: string;
  evaluatorsIds: string[];
  projects: string[];
}

export interface EvalutationDto {
  organizationalUnitId: string;
  expectedModelLevelId: string;
  auditorId: string;
  evaluatorInstitutionId: string;
  start: Date;
  end: Date;
  implementationInstitution?: string;
  name: string;
  evaluatorsIds: string[];
  projects: string[];
}

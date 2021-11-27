export interface EvaluatorDto {
  name: string;
  email: string;
  documentNumber: string;
  documentType: string;
  phone: string;
  password: string;
  evaluatorInstitutionId: string;
  licenses: LicenseDto[];
}

export interface LicenseDto {
  expiration: Date;
  type: string;
  modelLevelId: string;
}

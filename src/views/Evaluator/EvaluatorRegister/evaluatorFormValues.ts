export interface EvaluatorFormValues {
  name: string;
  email: string;
  documentNumber: string;
  documentType: string;
  phone: string;
  password: string;
  evaluatorInstitutionId: string;
  licenses: License[];
}

interface License {
  expiration: Date;
  type: string;
  model: string;
  modelLevelId: string;
}

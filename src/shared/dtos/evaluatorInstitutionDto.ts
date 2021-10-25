import { Address } from 'shared/models/address';

export interface EvaluatorInstitutionDto {
  id?: string;
  name: string;
  email: string;
  documentNumber: string;
  documentType: string;
  phone: string;
  address: Address;
}

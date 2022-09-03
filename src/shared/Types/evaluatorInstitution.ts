import { Address } from './address';

export interface EvaluatorInstitution {
  id: string;
  status: string;
  name: string;
  phone: string;
  email: string;
  documentType: string;
  documentNumber: string;
  address: Address;
}

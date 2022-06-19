import { ModelLevel } from './modelLevel';
import { Organization } from './organization';

export interface Evalutation {
  id: string;
  name: string;
  modelLevel: ModelLevel;
  organizationalUnit: Organization;
  state: 'Aguardando aprovação' | 'Avaliação inicial' | 'Avaliação final';
}

import { Indicator } from 'shared/models/indicator';

export interface CapacityResponseDto {
  id: string;
  name: string;
  modelCapacityId: string;
  indicators: Indicator[];
}

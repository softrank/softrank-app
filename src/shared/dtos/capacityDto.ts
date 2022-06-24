export interface CapacityDto {
  id?: string;
  name: string;
  type: 'O' | 'P';
  maxLevel: string;
  minLevel: string;
}

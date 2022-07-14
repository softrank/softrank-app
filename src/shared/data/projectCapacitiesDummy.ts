export interface Capacity {
  id?: string;
  name: string;
  type: 'O' | 'P';
  maxLevel: string;
  minLevel: string;
}

export const capacitiesData: Capacity[] = [
  {
    id: '1',
    name: 'Uma capacidade',
    type: 'P',
    minLevel: 'G',
    maxLevel: 'F',
  },
  {
    id: '2',
    name: 'Uma capacidade 2',
    type: 'P',
    minLevel: 'G',
    maxLevel: 'F',
  },
  {
    id: '2',
    name: 'Uma capacidade 3',
    type: 'P',
    minLevel: 'G',
    maxLevel: 'F',
  },
];

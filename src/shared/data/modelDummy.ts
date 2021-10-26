import { ModelEntity } from '../models/modelEntity';
import { ModelLevel } from '../models/modelLevel';
import { Process } from '../models/process';

const LevelOptions: ModelLevel[] = [
  {
    id: '',
    initial: 'A',
    name: 'Em otimização',
  },
  {
    id: '',
    initial: 'B',
    name: 'Gerenciado quantativamente',
  },
  {
    id: '',
    initial: 'C',
    name: 'Definido',
  },
  {
    id: '',
    initial: 'D',
    name: 'Largamente eefinido',
  },
  {
    id: '',
    initial: 'E',
    name: 'Parcialmente definido',
  },
  {
    id: '',
    initial: 'F',
    name: 'Gerenciado',
  },
  {
    id: '',
    initial: 'G',
    name: 'Parcialmente gerenciado',
  },
];

const ProcessOptions: Process[] = [
  {
    id: '',
    initials: 'GPR',
    name: 'Gerenciamento de projetos',
    description: 'descrição de projetos',
    expectedResults: [
      {
        id: '',
        initial: 'GPR1',
        description: 'descrip resultado',
        minLevel: '',
        maxLevel: '',
      },
    ],
  },
  {
    id: '',
    initials: 'GCO',
    name: 'Gerenciamento de configuração',
    description: 'descrição de configuração',
    expectedResults: [
      {
        id: '',
        initial: 'GCO1',
        description: 'descrip resultado',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GCO2',
        description: 'descrip gco 2',
        minLevel: '',
        maxLevel: '',
      },
    ],
  },
];

export const modelDummy: ModelEntity = {
  id: '',
  name: 'MPS.BR Software',
  year: new Date(),
  description: 'model description',
  modelLevels: LevelOptions,
  modelProcesses: ProcessOptions,
};

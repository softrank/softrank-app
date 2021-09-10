import { ModelEntity } from '../models/modelEntity';
import { ModelLevel } from '../models/modelLevel';
import { Process } from '../models/process';

const LevelOptions: ModelLevel[] = [
  {
    id: '1',
    initial: 'A',
    name: 'Em otimização',
  },
  {
    id: '2',
    initial: 'B',
    name: 'Gerenciado quantativamente',
  },
  {
    id: '3',
    initial: 'C',
    name: 'Definido',
  },
  {
    id: '4',
    initial: 'D',
    name: 'Largamente eefinido',
  },
  {
    id: '5',
    initial: 'E',
    name: 'Parcialmente definido',
  },
  {
    id: '6',
    initial: 'F',
    name: 'Gerenciado',
  },
  {
    id: '7',
    initial: 'G',
    name: 'Parcialmente gerenciado',
  },
];

const ProcessOptions: Process[] = [
  {
    id: '1',
    initial: 'GPR',
    name: 'Gerenciamento de projetos',
    description: 'descrição de projetos',
    expectedResults: [
      {
        id: '1',
        initial: 'GPR1',
        description: 'descrip resultado',
      },
    ],
  },
  {
    id: '2',
    initial: 'GCO',
    name: 'Gerenciamento de configuração',
    description: 'descrição de configuração',
    expectedResults: [
      {
        id: '2',
        initial: 'GCO1',
        description: 'descrip resultado',
      },
      {
        id: '3',
        initial: 'GCO2',
        description: 'descrip gco 2',
      },
    ],
  },
];

export const modelDummy: ModelEntity = {
  id: '1',
  name: 'MPS.BR Software',
  year: new Date(),
  description: 'model description',
  modelLevels: LevelOptions,
  modelProcesses: ProcessOptions,
};

import { ModelEntity } from '../models/modelEntity';
import { ModelLevel } from '../models/modelLevel';
import { Process } from '../models/process';

const LevelOptions: ModelLevel[] = [
  {
    id: '1',
    initial: 'A',
    name: 'Maduro',
  },
  {
    id: '2',
    initial: 'B',
    name: 'Parcialmente maduro',
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
        modelLevels: ['1'],
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
        id: '1',
        initial: 'GCO1',
        description: 'descrip resultado',
        modelLevels: ['1'],
      },
      {
        id: '2',
        initial: 'GCO2',
        description: 'descrip gco 2',
        modelLevels: ['1'],
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

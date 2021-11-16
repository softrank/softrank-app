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
    initial: 'GPR',
    name: 'Gerenciamento de projetos',
    description: 'descrição de projetos',
    expectedResults: [
      {
        id: '',
        initial: 'GPR1',
        name: 'O escopo do trabalho para o projeto é definido',
        description: 'descrip resultado',
        minLevel: '',
        maxLevel: '',
      },
    ],
  },
  {
    id: '',
    initial: 'GCO',
    name: 'Gerenciamento de configuração',
    description: 'descrição de configuração',
    expectedResults: [
      {
        id: '',
        initial: 'GCO1',
        name: 'O escopo do trabalho para o projeto é definido',
        description: 'descrip resultado',
        minLevel: '',
        maxLevel: '',
      },
      {
        id: '',
        initial: 'GCO2',
        name: 'O escopo do trabalho para o projeto é definido',
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

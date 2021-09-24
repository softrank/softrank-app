import { ModelLevel } from './modelLevel';
import { Process } from './process';

export class ModelEntity {
  constructor(
    public id: string = '',
    public name: string = '',
    public year: Date | number = Date.now(),
    public description: string = '',
    public modelLevels: ModelLevel[] = [new ModelLevel()],
    public modelProcesses: Process[] = [new Process()]
  ) {}
}

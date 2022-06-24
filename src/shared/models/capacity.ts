import { ModelLevel } from './modelLevel';

export class Capacity {
  constructor(
    public id: string = '',
    public name: string = '',
    public type: 'O' | 'P' = 'P',
    public maxLevel: ModelLevel = new ModelLevel(),
    public minLevel: ModelLevel = new ModelLevel()
  ) {}
}

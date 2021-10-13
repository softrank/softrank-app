import { License } from './license';

export class Evaluator {
  constructor(
    public id: string = '',
    public name: string = '',
    public email: string = '',
    public documentNumber: string = '',
    public documentType: string = 'f',
    public phone: string = '',
    public password: string = '',
    public licenses: License[] = [new License()]
  ) {}
}

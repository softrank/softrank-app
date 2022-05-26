export class ModelLevel {
  constructor(
    public id: string = '',
    public initial: string = '',
    public name: string = '',
    public predecessor: string | null = null
  ) {}
}

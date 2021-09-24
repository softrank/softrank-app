export class License {
  constructor(
    public expiration: Date = new Date(),
    public number: number | string = '',
    public modelLevelId: string = '',
    public type: 'líder' | 'adjunto' = 'adjunto'
  ) {}
}

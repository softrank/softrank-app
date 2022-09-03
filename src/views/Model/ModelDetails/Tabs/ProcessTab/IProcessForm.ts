export interface IProcessForm {
  id?: string;
  name: string;
  initial: string;
  description: string;
  expectedResults: any[];
  type: { label: string; value: string };
}

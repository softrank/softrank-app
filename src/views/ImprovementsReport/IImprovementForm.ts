export interface IImprovementForm {
  id?: string;
  process: SelectValue;
  expectedResult: SelectValue;
  type: 'required' | 'improvement';
  problem: string;
  suggestion: string;
}

interface SelectValue {
  label: string;
  value: string;
}

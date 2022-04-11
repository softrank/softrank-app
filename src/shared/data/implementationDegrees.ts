interface Degreee {
  label: string;
  value: string;
}

export const implementationDegreesData: Degreee[] = [
  {
    value: 'T',
    label: 'T - Totalmente implementado',
  },
  {
    value: 'L',
    label: 'L - Largamente implementado',
  },
  {
    value: 'P',
    label: 'P - Parcialmente implementado',
  },
  {
    value: 'N',
    label: 'N - Não implementado',
  },
  {
    value: 'NA',
    label: 'N/A - Não avaliado',
  },
  {
    value: 'F',
    label: 'F - Fora do escopo implementado',
  },
];

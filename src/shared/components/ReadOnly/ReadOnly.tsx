import React from 'react';
import { Label } from '../Form';
import { ReadOnlyContent } from './styled';

interface Props {
  label: string;
  value: string;
}

export const ReadOnly = (props: Props) => {
  const { label, value } = props;

  return (
    <div style={{ width: '100%' }}>
      <Label>{label}</Label>
      <ReadOnlyContent>{value}</ReadOnlyContent>
    </div>
  );
};

import React from 'react';
import { FormInput, InputLabel, RequiredSymbol } from './styled';

interface Props {
  label: string;
  placeholder: string;
  type: string;
  name: string;
  disabled?: boolean;
  required?: boolean;
  value?: string;
  error?: boolean;
}

export default function Input(props: Props) {
  return (
    <>
      <InputLabel>
        {props.label}
        {props.required && <RequiredSymbol>*</RequiredSymbol>}
      </InputLabel>
      <FormInput
        placeholder={props.placeholder}
        type={props.type}
        name={props.name}
        error={props.error}
        disabled={props.disabled}
      />
    </>
  );
}

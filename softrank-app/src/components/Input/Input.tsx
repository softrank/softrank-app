import React from 'react';
import { FormInput } from './styled';

interface Props {
  placeholder: string;
}

export default function Input(props: Props) {
  return <FormInput placeholder={props.placeholder} />;
}

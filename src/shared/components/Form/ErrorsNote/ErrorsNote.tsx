import React, { useEffect, useState } from 'react';
import { DeepMap, FieldValues, FieldError } from 'react-hook-form';
import styled from 'styled-components';

const Note = styled.span`
  position: relative;
  top: -0.8em;
  left: 0.8em;

  font-size: 14px;

  color: var(--error);
`;

interface Props {
  error: DeepMap<FieldValues, FieldError>;
}

export const ErrorsNote = ({ error }: Props) => {
  const [errorNote, setErrorNote] = useState<string>();

  const handleErrorNote = (error: any) => {
    switch (error.type) {
      case undefined:
        setErrorNote('');
        break;
      case 'required':
        setErrorNote('Este campo é obrigatório!');
        break;
      default:
        setErrorNote(error.message);
        break;
    }
  };

  useEffect(() => {
    handleErrorNote(error);
  }, [error]);

  return <>{errorNote && <Note>{errorNote}</Note>}</>;
};

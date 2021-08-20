import { InputDiv, StyledInput } from './styled';
import {
  Control,
  Controller,
  DeepMap,
  FieldError,
  FieldValues,
} from 'react-hook-form';

import { Label, ErrorsNote } from '..';

interface Props {
  name: string;
  label: string;
  placeholder: string;
  type?: 'text' | 'email' | 'password';
  control: Control<any>;
  defaultValue?: string;
  rules?: any;
  errors?: DeepMap<FieldValues, FieldError>;
}

export const Input = (props: Props) => {
  const {
    name,
    label,
    placeholder,
    type = 'text',
    control,
    defaultValue,
    rules,
    errors,
  } = props;

  return (
    <InputDiv>
      <Label>{label}</Label>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <>
            <StyledInput
              placeholder={placeholder}
              onChange={(e) => onChange((value = e.target.value))}
              type={type}
              value={value ?? ''}
              error={!!errors}
            />
            {errors && <ErrorsNote error={errors} />}
          </>
        )}
      />
    </InputDiv>
  );
};

import { InputDiv, StyledInput } from './styled';
import {
  Control,
  Controller,
  DeepMap,
  FieldError,
  FieldValues,
} from 'react-hook-form';
import InputMask from 'react-input-mask';

import { Label, ErrorsNote } from '..';

interface Props {
  name: string;
  label: string;
  placeholder: string;
  type?: 'text' | 'email' | 'password' | 'number';
  control: Control<any>;
  defaultValue?: string;
  rules?: any;
  errors?: DeepMap<FieldValues, FieldError>;
  mask?: string;
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
    mask,
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
              onChange={(e: any) => onChange((value = e.target.value))}
              type={type}
              value={value ?? ''}
              error={errors && true}
              as={InputMask}
              mask={mask ?? ''}
            />
            {errors && <ErrorsNote error={errors} />}
          </>
        )}
      />
    </InputDiv>
  );
};

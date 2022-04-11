import { InputDiv, ReadOnlyInput, StyledInput } from './styled';
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
  type?: 'text' | 'email' | 'password' | 'number' | 'file';
  control: Control<any>;
  defaultValue?: string;
  rules?: any;
  errors?: DeepMap<FieldValues, FieldError>;
  mask?: string;
  disabled?: boolean;
  readonly?: boolean;
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
    disabled = false,
    readonly = false,
  } = props;

  return (
    <InputDiv>
      <Label>{label}</Label>
      {readonly ? (
        <ReadOnlyInput>testing</ReadOnlyInput>
      ) : (
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
                disabled={disabled}
              />
              {errors && <ErrorsNote error={errors} />}
            </>
          )}
        />
      )}
    </InputDiv>
  );
};

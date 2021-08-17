import {
  Control,
  Controller,
  DeepMap,
  FieldError,
  FieldValues,
} from 'react-hook-form';
import { ErrorsNote } from '..';

import { Label } from '../Label/Label';
import { StyledTextArea } from './styled';

interface Props {
  label: string;
  name: string;
  placeholder: string;
  control: Control<any>;
  rules?: any;
  errors?: DeepMap<FieldValues, FieldError>;
}

export const TextArea = (props: Props) => {
  const { label, name, control, placeholder, rules, errors } = props;

  return (
    <div style={{ width: '100%' }}>
      <Label>{label}</Label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <>
            <StyledTextArea
              value={value}
              placeholder={placeholder}
              error={!!errors}
              onChange={(e) => onChange((value = e.target.value))}
            />
            {errors && <ErrorsNote error={errors} />}
          </>
        )}
      />
    </div>
  );
};

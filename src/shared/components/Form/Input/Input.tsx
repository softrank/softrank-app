import { InputDiv, StyledInput } from './styled';
import { Controller } from 'react-hook-form';
import { Label } from '../Label/Label';
interface Props {
  name: string;
  label: string;
  placeholder: string;
  type?: 'text' | 'email' | 'password';
  control: any;
  defaultValue?: string;
}

export const Input = (props: Props) => {
  const {
    name,
    label,
    placeholder,
    type = 'text',
    control,
    defaultValue,
  } = props;

  return (
    <InputDiv>
      <Label>{label}</Label>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => (
          <StyledInput
            placeholder={placeholder}
            onChange={(e) => onChange((value = e.target.value))}
            type={type}
            value={value ?? ''}
          />
        )}
      />
    </InputDiv>
  );
};

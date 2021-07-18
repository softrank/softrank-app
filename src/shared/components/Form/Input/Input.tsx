import { InputDiv, StyledInput } from './styled';
import { Controller } from 'react-hook-form';
import Label from '../Label/Label';

interface Props {
  name: string;
  label: string;
  placeholder: string;
  type: string;
  control: any;
}

export default function Input(props: Props) {
  const { label, name, control, placeholder, type } = props;

  return (
    <InputDiv>
      <Label>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange } }) => (
          <StyledInput
            placeholder={placeholder}
            onChange={onChange}
            type={type}
          />
        )}
      />
    </InputDiv>
  );
}

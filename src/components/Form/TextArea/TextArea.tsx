import { Controller } from 'react-hook-form';

import Label from '../Label/Label';
import { StyledTextArea } from './styled';

interface Props {
  label: string;
  name: string;
  placeholder: string;
  control: any;
  error?: boolean;
}

export default function Input(props: Props) {
  const { label, name, control, placeholder, error } = props;

  return (
    <div style={{ width: '100%' }}>
      <Label>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange } }) => (
          <StyledTextArea
            placeholder={placeholder}
            onChange={onChange}
            error={error}
          />
        )}
      />
    </div>
  );
}

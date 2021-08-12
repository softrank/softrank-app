import { Controller } from 'react-hook-form';

import { Label } from '../Label/Label';
import { StyledTextArea } from './styled';

interface Props {
  label: string;
  name: string;
  placeholder: string;
  control: any;
  error?: boolean;
}

export const TextArea = (props: Props) => {
  const { label, name, control, placeholder, error } = props;

  return (
    <div style={{ width: '100%' }}>
      <Label>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <StyledTextArea
            value={value}
            placeholder={placeholder}
            error={error}
            onChange={(e) => onChange((value = e.target.value))}
          />
        )}
      />
    </div>
  );
};

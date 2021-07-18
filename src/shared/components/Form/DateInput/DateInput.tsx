import { registerLocale } from 'react-datepicker';
import pt from 'date-fns/locale/pt-BR';

import Label from '../Label/Label';
import { SDateInput } from './styled';
import { Controller } from 'react-hook-form';

interface Props {
  label: string;
  name: string;
  placeholder: string;
  control: any;
  yearPicker?: boolean;
  dateFormat: string;
}

export const DateInput = (props: Props) => {
  const { label, name, placeholder, control, yearPicker, dateFormat } = props;

  registerLocale('pt', pt);

  return (
    <div style={{ width: '100%' }}>
      <Label>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <SDateInput
            placeholderText={placeholder}
            selected={value}
            onChange={onChange}
            showYearPicker={yearPicker}
            dateFormat={dateFormat}
            locale="pt"
          />
        )}
      />
    </div>
  );
};

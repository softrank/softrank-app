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
  defaultValue?: any;
  shouldUnregister?: boolean;
}

export const DateInput = ({
  label,
  name,
  placeholder,
  control,
  yearPicker,
  dateFormat,
  defaultValue,
  shouldUnregister = true,
}: Props) => {
  registerLocale('pt', pt);

  return (
    <div style={{ width: '100%' }}>
      <Label>{label}</Label>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        shouldUnregister={shouldUnregister}
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

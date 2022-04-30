import { Controller } from 'react-hook-form';
import { Checkbox } from 'shared/components/Checkbox/Checkbox';
interface Props {
  name: string;
  label: string;
  control: any;
  defaultValue?: boolean;
  disabled?: boolean;
  error?: boolean;
}

export const ControlledCheckbox = (props: Props) => {
  const { name, label, control, defaultValue, disabled, error } = props;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue ?? false}
      render={({ field: { onChange, value } }) => (
        <Checkbox
          onChange={(e) => onChange(e.currentTarget.checked)}
          label={label}
          checked={value}
          disabled={disabled}
          error={error}
        />
      )}
    />
  );
};

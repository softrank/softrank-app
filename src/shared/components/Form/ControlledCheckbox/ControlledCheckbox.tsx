import { Controller } from 'react-hook-form';
import { Checkbox } from 'shared/components/Checkbox/Checkbox';
interface Props {
  name: string;
  label: string;
  control: any;
  checked?: boolean;
  disabled?: boolean;
  error?: boolean;
}

export const ControlledCheckbox = (props: Props) => {
  const { name, label, control, checked, disabled, error } = props;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={checked ?? false}
      render={(props) => (
        <Checkbox
          onChange={(e) => props.field.onChange(e.currentTarget.checked)}
          label={label}
          checked={checked}
          disabled={disabled}
          error={error}
        />
      )}
    />
  );
};

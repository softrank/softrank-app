import {
  Control,
  Controller,
  DeepMap,
  FieldError,
  FieldValues,
} from 'react-hook-form';

import { ErrorsNote, Label } from '..';
import { CustomSelect } from './styled';
interface OptionValue {
  value: string;
  label: string;
}

interface Props {
  name: string;
  label: string;
  placeholder: string;
  control: Control<any>;
  optionValues: any[];
  optionLabel: string;
  optionValue?: string;
  disabled?: boolean;
  multi?: boolean;
  search?: boolean;
  defaultValue?: any;
  rules?: any;
  errors?: DeepMap<FieldValues, FieldError>;
  value?: any;
}

export const Select = (props: Props) => {
  const {
    name,
    label,
    placeholder,
    control,
    optionValues,
    optionValue = '',
    optionLabel,
    disabled,
    multi,
    search,
    defaultValue,
    rules,
    errors,
  } = props;

  const options = optionValues.map((element) => {
    const option: OptionValue = {
      value: optionValue === '' ? element.id : element[optionValue],
      label: element[optionLabel],
    };
    return option;
  });

  return (
    <div style={{ width: '100%' }}>
      <Label htmlFor={name}>
        {label}
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue}
          rules={rules}
          render={({ field: { onChange, value, ref } }) => (
            <>
              <CustomSelect
                ref={ref}
                classNamePrefix={'select'}
                placeholder={placeholder}
                onChange={onChange}
                options={options}
                value={value ?? null}
                isDisabled={disabled}
                isMulti={multi}
                isSearchable={search}
                error={!!errors}
                defaultValue={value}
                noOptionsMessage={() => 'Sem opções'}
              />
              {errors && <ErrorsNote error={errors} />}
            </>
          )}
        />
      </Label>
    </div>
  );
};

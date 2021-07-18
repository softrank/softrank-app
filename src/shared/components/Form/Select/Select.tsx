import React from 'react';
import { Controller } from 'react-hook-form';

import Label from '../Label/Label';
import { CustomSelect } from './styled';

interface OptionValue {
  value: string;
  label: string;
}

interface Props {
  name: string;
  label: string;
  placeholder: string;
  control: any;
  optionValues: any[];
  optionLabel: string;
  disabled?: boolean;
  multi?: boolean;
  search?: boolean;
  error?: boolean;
}

export const Select = (props: Props) => {
  const {
    name,
    label,
    placeholder,
    control,
    optionValues,
    optionLabel,
    disabled,
    multi,
    search,
    error,
  } = props;

  const options: OptionValue[] = [];

  optionValues.map((element) => {
    const option: OptionValue = {
      value: element['id'],
      label: element[optionLabel],
    };
    options.push(option);
    return options;
  });

  return (
    <div style={{ width: '100%' }}>
      <Label>React select</Label>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <CustomSelect
            classNamePrefix={'select'}
            label={label}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            options={options}
            isDisabled={disabled}
            isMulti={multi}
            isSearchable={search}
            error={error}
          />
        )}
      />
    </div>
  );
};

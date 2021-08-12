import React from 'react';
import { Controller } from 'react-hook-form';
import { Label } from '../Label/Label';

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
  optionValue?: string;
  optionLabel: string;
  disabled?: boolean;
  multi?: boolean;
  search?: boolean;
  error?: boolean;
  defaultValue?: any;
}

export const Select = (props: Props) => {
  const {
    name,
    label,
    placeholder,
    control,
    optionValues,
    optionValue = 'id',
    optionLabel,
    disabled,
    multi,
    search,
    error,
    defaultValue,
  } = props;

  const options: OptionValue[] = [];

  optionValues.map((element) => {
    const option: OptionValue = {
      value: element[optionValue],
      label: element[optionLabel],
    };
    options.push(option);
    return options;
  });

  return (
    <div style={{ width: '100%' }}>
      <Label>{label}</Label>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        // rules={{ required: true }}
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

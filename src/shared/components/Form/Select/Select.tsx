import React from 'react';
import {
  Control,
  Controller,
  DeepMap,
  FieldError,
  FieldValues,
} from 'react-hook-form';
import { ErrorsNote } from '..';
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
  control: Control<any>;
  optionValues: any[];
  optionValue?: string;
  optionLabel: string;
  disabled?: boolean;
  multi?: boolean;
  search?: boolean;
  defaultValue?: any;
  rules?: any;
  errors?: DeepMap<FieldValues, FieldError>;
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
    defaultValue,
    rules,
    errors,
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
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <>
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
              error={!!errors}
            />
            {errors && <ErrorsNote error={errors} />}
          </>
        )}
      />
    </div>
  );
};

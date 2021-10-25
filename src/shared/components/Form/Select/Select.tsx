import React from 'react';
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
    optionValue,
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
      value: optionValue ?? element.id,
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
        render={({ field: { onChange, value, ref } }) => (
          <>
            <CustomSelect
              inputRef={ref}
              classNamePrefix={'select'}
              label={label}
              placeholder={placeholder}
              onChange={onChange}
              options={options}
              value={
                props.value ? options.find((c) => c.value === value) : undefined
              }
              isDisabled={disabled}
              isMulti={multi}
              isSearchable={search}
              error={!!errors}
              defaultValue={value}
            />
            {errors && <ErrorsNote error={errors} />}
          </>
        )}
      />
    </div>
  );
};

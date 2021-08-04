import { Controller } from 'react-hook-form';

import Label from '../Label/Label';
import { StyledTextArea } from './styled';

interface Props {
  label: string;
  name: string;
  placeholder: string;
  control: any;
  error?: boolean;
  value?: any;
  inputName?: string;
  index?: number;
  parentIndex?: number;
  onChangeArray?: (
    name: string,
    index: number,
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onChangeArrayParent?: (
    name: string,
    index: number,
    e: React.ChangeEvent<HTMLTextAreaElement>,
    parentIndex: number
  ) => void;
}

export const TextArea = (props: Props) => {
  const {
    label,
    name,
    control,
    placeholder,
    error,
    value,
    inputName,
    index,
    parentIndex,
    onChangeArray,
    onChangeArrayParent,
  } = props;

  return (
    <div style={{ width: '100%' }}>
      <Label>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange } }) => (
          <StyledTextArea
            placeholder={placeholder}
            error={error}
            value={value}
            onChange={(e) =>
              onChangeArrayParent &&
              index !== undefined &&
              inputName &&
              parentIndex !== undefined
                ? onChange(
                    onChangeArrayParent(inputName, index, e, parentIndex)
                  )
                : onChangeArray && index !== undefined && inputName
                ? onChange(onChangeArray(inputName, index, e))
                : onChange
            }
          />
        )}
      />
    </div>
  );
};

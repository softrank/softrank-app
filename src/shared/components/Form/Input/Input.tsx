import { InputDiv, StyledInput } from './styled';
import { Controller } from 'react-hook-form';
import Label from '../Label/Label';
interface Props {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  control: any;
  defaultValue?: string;
  value?: any;
  inputName?: string;
  index?: number;
  parentIndex?: number;
  onChangeArray?: (
    name: string,
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  onChangeArrayParent?: (
    name: string,
    index: number,
    e: React.ChangeEvent<HTMLInputElement>,
    parentIndex: number
  ) => void;
}

export default function Input({
  label,
  name,
  control,
  placeholder,
  type = 'text',
  defaultValue,
  value,
  inputName,
  index,
  parentIndex,
  onChangeArray,
  onChangeArrayParent,
}: Props) {
  return (
    <InputDiv>
      <Label>{label}</Label>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange } }) => (
          <StyledInput
            placeholder={placeholder}
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
            type={type}
            value={value}
          />
        )}
      />
    </InputDiv>
  );
}

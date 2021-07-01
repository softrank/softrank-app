import { useEffect, useRef, useState } from 'react';
import Label from '../Label/Label';
import { SelectData } from './SelectData';
import {
  Divider,
  SelectBody,
  SelectDropdown,
  SelectIcon,
  SelectList,
  SelectOption,
} from './styled';

interface Props {
  label: string;
  placeholder: string;
  disabled?: boolean;
  error?: boolean;
}

export const SelectCustom = (props: Props) => {
  const { label, placeholder, disabled, error } = props;

  const [optionsList, setOptionsList] = useState(false);
  const [selectOptionId, setSelectOptionId] = useState<number>();
  const [selectOptionValue, setSelectOptionValue] = useState<string>();

  const toggleOptions = () => setOptionsList(!optionsList);

  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOptionsList(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  const optionClicked = (id: number, value: string) => {
    setSelectOptionId(id);
    setSelectOptionValue(value);
    setOptionsList(false);
  };

  return (
    <div style={{ width: '100%' }} ref={ref}>
      <Label>{label}</Label>
      <SelectBody
        onClick={toggleOptions}
        active={optionsList}
        disabled={disabled}
        error={error}
      >
        {!selectOptionId && <p>{placeholder}</p>}
        {selectOptionId && <p>{selectOptionValue}</p>}
        <SelectIcon />
      </SelectBody>
      {optionsList && (
        <SelectDropdown>
          <SelectList>
            {SelectData.map((option, index) => {
              return (
                <div key={index}>
                  <SelectOption
                    onClick={() => optionClicked(option.id, option.name)}
                  >
                    {option.name}
                  </SelectOption>
                  {index !== SelectData.length - 1 && <Divider />}
                </div>
              );
            })}
          </SelectList>
        </SelectDropdown>
      )}
    </div>
  );
};

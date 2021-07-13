import { useState } from 'react';
import { Controller } from 'react-hook-form';

import {
  CheckboxContainer,
  HiddenCheckbox,
  Icon,
  StyledCheckbox,
} from './styled';

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

  const [check, setCheck] = useState(checked ?? false);

  const handleCheck = () => setCheck(!check);

  return (
    <>
      <CheckboxContainer>
        <Controller
          name={name}
          control={control}
          defaultValue={checked ?? false}
          render={(props) => (
            <HiddenCheckbox
              onChange={(e) => props.field.onChange(e.currentTarget.checked)}
              onClick={() => handleCheck()}
              checked={check}
              disabled={disabled}
            />
          )}
        />
        <StyledCheckbox checked={check} disabled={disabled} error={error}>
          <Icon disabled={disabled} viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
      </CheckboxContainer>
      <span style={{ marginLeft: 8 }}>{label}</span>
    </>
  );
};

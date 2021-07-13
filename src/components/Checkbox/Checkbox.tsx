import { useState } from 'react';
import { Controller } from 'react-hook-form';

import {
  CheckboxContainer,
  HiddenCheckbox,
  Icon,
  StyledCheckbox,
} from './styled';

interface Props {
  label: string;
  checked?: boolean;
  disabled?: boolean;
  error?: boolean;
  onChange: () => void;
}

export const Checkbox = (props: Props) => {
  const { label, checked, disabled, error, onChange } = props;

  const [check, setCheck] = useState(checked ?? false);

  const handleCheck = () => setCheck(!check);

  return (
    <>
      <CheckboxContainer>
        <HiddenCheckbox
          onChange={onChange}
          onClick={() => handleCheck()}
          checked={check}
          disabled={disabled}
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

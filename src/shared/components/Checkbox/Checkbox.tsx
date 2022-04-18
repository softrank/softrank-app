import { useState } from 'react';

import {
  CheckboxContainer,
  HiddenCheckbox,
  Icon,
  StyledCheckbox,
} from './styled';

interface Props {
  label: string;
  onChange: (e: any) => void;
  checked?: boolean;
  disabled?: boolean;
  error?: boolean;
}

export const Checkbox = (props: Props) => {
  const { label, onChange, checked, disabled, error } = props;

  const [check, setCheck] = useState(checked ?? false);

  const handleCheck = () => setCheck(!check);

  return (
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
      <span>{label}</span>
    </CheckboxContainer>
  );
};

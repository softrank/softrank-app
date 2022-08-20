import { useState, useEffect } from 'react';

import {
  CheckedCircle,
  HiddenRadio,
  RadioContainer,
  RadioLabel,
  StyledRadio,
} from './styled';

type Props = {
  name: string;
  value: string;
  color?: 'red' | 'yellow' | 'green' | 'blue';
  legend?: string;
  register: any;
  disabled?: boolean;
};

export const Radio = (props: Props) => {
  const { name, value, color, legend, register, disabled = false } = props;

  const [radioColor, setRadioColor] = useState('var(--gray-500)');

  useEffect(() => {
    color === 'green'
      ? setRadioColor('#52b788')
      : color === 'red'
      ? setRadioColor('#f7a399')
      : color === 'yellow'
      ? setRadioColor('#ffd500')
      : color === 'blue'
      ? setRadioColor('#42a5f5')
      : setRadioColor('var(--gray-500)');
    if (disabled) setRadioColor('var(--gray-500)');
  }, [color, disabled]);

  return (
    <RadioContainer>
      <div style={{ position: 'relative' }}>
        <HiddenRadio
          type="radio"
          name={name}
          value={value}
          {...register(name)}
          disabled={disabled}
        />
        <StyledRadio color={radioColor}>
          <CheckedCircle color={radioColor} />
        </StyledRadio>
      </div>
      {legend && <RadioLabel>{legend}</RadioLabel>}
    </RadioContainer>
  );
};

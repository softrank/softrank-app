import { useState, useEffect } from 'react';

import {
  CheckedCircle,
  HiddenRadio,
  RadioContainer,
  RadioLabel,
  StyledRadio,
} from './styled';

interface Props {
  name: string;
  value: string;
  color?: 'red' | 'yellow' | 'green';
  legend?: string;
  register: any;
}

export const Radio = (props: Props) => {
  const { name, value, color, legend, register } = props;

  const [radioCollor, setRadioCollor] = useState('var(--gray-500)');

  useEffect(() => {
    color === 'green'
      ? setRadioCollor('#52b788')
      : color === 'red'
      ? setRadioCollor('#f7a399')
      : color === 'yellow'
      ? setRadioCollor('#ffd500')
      : setRadioCollor('var(--gray-500)');
  }, [color]);

  return (
    <RadioContainer>
      <div style={{ position: 'relative' }}>
        <HiddenRadio
          type="radio"
          name={name}
          value={value}
          {...register(name)}
        />
        <StyledRadio color={color}>
          <CheckedCircle color={radioCollor} />
        </StyledRadio>
      </div>
      {legend && <RadioLabel>{legend}</RadioLabel>}
    </RadioContainer>
  );
};

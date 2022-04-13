import { Control, Controller } from 'react-hook-form';

import { HiddenRadio, RadioLabel, StyledRadio } from './styled';

interface Props {
  name: string;
  control: Control<any>;
  option: string;
  rules?: any;
  color?: 'red' | 'yellow' | 'green';
  legend?: string;
}

export const Radio = (props: Props) => {
  const { name, control, option, rules, color, legend } = props;

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <>
          <div style={{ position: 'relative' }}>
            <HiddenRadio
              onChange={(e: any) => onChange((value = e.target.value))}
              type="radio"
              value={option}
              name={name}
            />
            <StyledRadio color={color} />
          </div>
          {legend && <RadioLabel>{legend}</RadioLabel>}
        </>
      )}
    />
  );
};

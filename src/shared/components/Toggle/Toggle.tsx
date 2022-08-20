import { useState, ChangeEvent } from 'react';
import { Input, Label, Switch } from './styled';

export const Toggle = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setChecked(e.target.checked);

  return (
    <Label>
      <span>Toggle is off</span>
      <Input checked={checked} onChange={handleChange} />
      <Switch />
    </Label>
  );
};

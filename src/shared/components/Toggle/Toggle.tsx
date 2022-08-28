import { useState, ChangeEvent, useEffect } from 'react';
import { Input, Label, Switch } from './styled';

type Props = {
  checked: boolean;
};

export const Toggle = ({ checked }: Props) => {
  const [inputCheck, setInputCheck] = useState(checked);

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
  //   setInputCheck(e.target.checked);

  useEffect(() => {
    setInputCheck(checked);
  }, [checked]);

  return (
    <Label>
      <span>Toggle is off</span>
      <Input checked={inputCheck} />
      <Switch />
    </Label>
  );
};

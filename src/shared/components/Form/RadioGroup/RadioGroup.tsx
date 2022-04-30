import { Label } from '..';
import styled from 'styled-components';

interface Props {
  label: string;
  children: JSX.Element[];
}

export const RadioGroup = (props: Props) => {
  const { label, children } = props;

  return (
    <Container>
      <Label>{label}</Label>
      <Radios>{children}</Radios>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const Radios = styled.div`
  width: 100%;
  height: 3.2rem;
  padding: 0.6em;

  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 12px;
`;

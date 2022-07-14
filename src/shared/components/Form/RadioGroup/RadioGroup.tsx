import { Label } from '..';
import styled, { css } from 'styled-components';

interface Props {
  label: string;
  children: JSX.Element[];
  disabled?: boolean;
}

interface RadiosProps {
  disabled: boolean;
}

export const RadioGroup = (props: Props) => {
  const { label, children, disabled = false } = props;

  return (
    <Container>
      <Label>{label}</Label>
      <Radios disabled={disabled}>{children}</Radios>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const Radios = styled.div<RadiosProps>`
  width: 100%;
  height: 3.2rem;
  padding: 0.6em;
  margin-top: 0.4em;

  display: flex;
  align-items: center;
  gap: 1rem;

  ${(props) =>
    props.disabled &&
    css`
      background-color: var(--gray-50);
      border-radius: var(--radius);
    `}
`;

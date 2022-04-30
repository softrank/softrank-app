import styled from 'styled-components';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const Options = ({ children }: Props) => {
  return <OptionsStyled>{children}</OptionsStyled>;
};

const OptionsStyled = styled.div`
  width: 100%;
  margin-top: 1rem;

  display: flex;
  justify-content: space-between;
  gap: 0.2em;
`;

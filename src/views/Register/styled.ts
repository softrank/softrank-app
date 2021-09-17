import styled from 'styled-components';

export const RegisterOptinos = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-top: 10vh;
`;

export const RegisterItem = styled.a`
  width: 60%;
  padding: 0.4em;
  margin-bottom: 0.6rem;

  font-size: 24px;
  text-align: center;
  color: var(--gray-700);

  outline: none;
  border-radius: var(--radius);
  border: 2px solid var(--gray-100);

  background: var(--white);
  cursor: pointer;
  transition: all 400ms ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

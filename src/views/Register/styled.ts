import styled from 'styled-components';

export const RegisterOptinos = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;

  padding-top: 10vh;
`;

export const RegisterItem = styled.a`
  width: 60%;
  padding: 0.4em;

  font-size: 24px;
  text-align: center;
  color: ${({ theme }) => theme.text};

  outline: none;
  border-radius: var(--radius);
  border: 2px solid ${({ theme }) => theme.border};

  background: ${({ theme }) => theme.body};
  cursor: pointer;
  transition: all 400ms ease;

  &:hover {
    transform: translateY(-3px);
    color: var(--purple-500);
  }
`;

import styled, { css } from 'styled-components';

interface Props {
  width?: string;
  secondary?: boolean;
  outline?: boolean;
}

export const StyledButton = styled.button<Props>`
  width: ${(props) => (props.width ? props.width : '9.2em')};
  height: 2.4em;

  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
  color: var(--white);

  background: ${({ theme }) => theme.accent};
  border: 2px solid ${({ theme }) => theme.accent};
  border-radius: 10px;
  outline: none;

  cursor: pointer;
  transition: all 400ms ease;

  &:hover {
    box-shadow: 0 8px 16px 0 rgb(39 17 45 / 10%);
    border: 2px solid ${({ theme }) => theme.accent};
    transform: translateY(-3px);
  }

  &:active {
    background-color: var(--purple-300);
    border: 2px solid var(--purple-500);
    color: var(--purple-500);
  }

  &:disabled {
    color: ${({ theme }) => theme.disabledText};
    background: ${({ theme }) => theme.body};
    border: 2px solid ${({ theme }) => theme.border};

    pointer-events: none;
  }

  ${(props) =>
    props.secondary &&
    css`
      background: ${({ theme }) => theme.accentBackground};
      color: ${({ theme }) => theme.accent};
      border: 2px solid ${({ theme }) => theme.accentBackground};
    `}

  ${(props) =>
    props.outline &&
    css`
      background: ${({ theme }) => theme.accentBackground};
      color: ${({ theme }) => theme.accent};
      border: 2px solid ${({ theme }) => theme.accent};

      font-weight: 500;

      &:hover {
        border: 2px solid ${({ theme }) => theme.accent};
        color: ${({ theme }) => theme.accent};
      }
    `}
`;

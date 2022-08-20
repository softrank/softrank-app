import styled, { css } from 'styled-components';

interface Props {
  width?: string;
  secondary?: boolean;
  neutral?: boolean;
}

export const StyledButton = styled.button<Props>`
  width: ${(props) => (props.width ? props.width : '9.2em')};
  height: 2.4em;

  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
  color: var(--background);

  background: var(--purple-500);
  border: 2px solid var(--purple-500);
  border-radius: 10px;
  outline: none;

  cursor: pointer;
  transition: all 400ms ease;

  &:hover {
    box-shadow: 0 8px 16px 0 rgb(39 17 45 / 10%);
    border: 2px solid var(--purple-500);
    transform: translateY(-3px);
  }

  &:active {
    background-color: var(--purple-300);
    border: 2px solid var(--purple-500);
    color: var(--purple-500);
  }

  &:disabled {
    color: var(--gray-500);
    background: var(--gray-100);
    border: 2px solid var(--gray-100);
    pointer-events: none;
  }

  ${(props) =>
    props.secondary &&
    css`
      background: var(--purple-300);
      color: var(--purple-500);
      border: 2px solid var(--purple-300);
    `}

  ${(props) =>
    props.neutral &&
    css`
      background: var(--background);
      color: var(--gray-700);
      border: 2px solid var(--gray-100);

      font-weight: 500;

      &:hover {
        border: 2px solid var(--purple-500);
        color: var(--purple-500);
      }

      &:active {
        background-color: var(--purple-500);
        border: 2px solid var(--purple-500);
        color: var(--purple-500);
      }
    `}
`;

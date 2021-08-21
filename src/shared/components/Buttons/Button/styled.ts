import styled, { css } from 'styled-components';

interface Props {
  width?: string;
  secondary?: boolean;
}

export const StyledButton = styled.button<Props>`
  width: ${(props) => (props.width ? props.width : '9.2em')};
  height: 2.4em;

  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
  color: var(--white);

  background: var(--dark-purple);
  border: 2px solid var(--dark-purple);
  border-radius: 10px;
  outline: none;

  cursor: pointer;
  transition: all 400ms ease;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    box-shadow: 0 8px 16px 0 rgb(39 17 45 / 10%);
    border: 2px solid var(--dark-purple);
    transform: translateY(-3px);
  }

  &:active {
    background-color: var(--light-purple);
    border: 2px solid var(--dark-purple);
    color: var(--dark-purple);
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
      background: var(--light-purple);
      color: var(--dark-purple);
      border: 2px solid var(--light-purple);

      &:active {
        background-color: var(--dark-purple);
        border: 2px solid var(--dark-purple);
        color: var(--white);
      }
    `}
`;

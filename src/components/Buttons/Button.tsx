import styled from 'styled-components';

interface Props {
  secondary?: boolean;
}

export default styled.button<Props>`
  box-sizing: border-box;
  width: 9.2em;
  height: 2.4em;
  margin-top: 0.8em;

  font-size: 1.2rem;
  font-weight: 600;

  border: 2px solid var(--dark-purple);
  border-radius: 10px;

  background: var(--dark-purple);
  color: var(--white);
  cursor: pointer;
  outline: none;

  transition: all 600ms ease;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    box-shadow: 0 8px 16px 0 rgb(39 17 45 / 10%);
    background-color: white;
    border: 2px solid var(--dark-purple);
    color: var(--dark-purple);
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
`;

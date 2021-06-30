import styled from 'styled-components';

interface Props {
  secondary?: boolean;
}

export default styled.button<Props>`
  /* #region Variables */

  --button-main-color: ${(props) =>
    props.secondary ? 'var(--light-purple)' : 'var(--dark-purple)'};
  --button-secondary-color: ${(props) =>
    props.secondary ? 'var(--dark-purple)' : 'var(--light-purple)'};
  --button-content-color: ${(props) =>
    props.secondary ? 'var(--dark-purple)' : 'var(--white)'};

  /* #endregion Variables */

  box-sizing: border-box;
  width: 9.2em;
  height: 2.4em;
  margin: 0.8em 0;

  font-size: 1.2rem;
  font-weight: 600;

  border: 2px solid var(--button-main-color);
  border-radius: 10px;

  background: var(--button-main-color);
  color: var(--button-content-color);
  cursor: pointer;
  outline: none;

  transition: all 0.3s ease;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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

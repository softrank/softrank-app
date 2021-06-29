import styled from 'styled-components';

interface Props {
  error?: boolean;
}

export const StyledTextArea = styled.textarea<Props>`
  --box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  width: 100%;
  height: 8em;
  padding: 0.6em;
  margin: 0.2em 0 0.8em 0;
  resize: none;

  font-size: 1.2rem;

  transition: 0.4s;

  color: ${(props) => (props.error ? 'var(--error)' : 'var(--gray-700)')};
  outline: none;
  border-radius: var(--radius);
  border: 2px solid
    ${(props) => (props.error ? 'var(--error)' : 'var(--gray-100)')};

  &:hover {
    box-shadow: var(--box-shadow);
    border: 2px solid var(--dark-purple);
    color: black;
  }

  &:focus {
    box-shadow: var(--box-shadow);
    border: 2px solid var(--dark-purple);
    color: black;
  }

  &::placeholder {
    color: ${(props) => (props.error ? 'var(--error)' : 'var(--gray-500)')};
  }

  &:disabled {
    color: var(--gray-500);
    background: var(--gray-50);
    border: 2px solid var(--gray-50);
    pointer-events: none;
  }

  /* #region Scrollbar  */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    margin: 10px;

    background: var(--light-purple);
    border-radius: var(--radius);
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--dark-purple);
    border-radius: var(--radius);
  }
  /* #endregion Scrollbar  */
`;

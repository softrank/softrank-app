import styled from 'styled-components';

interface Props {
  error?: boolean;
}

export const StyledInput = styled.input<Props>`
  --box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  width: 100%;
  height: 3.2rem;
  padding: 0.6em;
  margin: 0.2em 0 0.8em 0;
  border-radius: var(--radius);
  box-sizing: border-box;

  font-size: 16px;

  transition: 0.4s;
  outline: none;
  color: ${(props) => (props.error ? 'var(--error)' : 'var(--gray-700)')};
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
    border: 2px solid var(--gray-50);
    background: var(--gray-50);
    color: var(--gray-500);
    pointer-events: none;
  }
`;

export const InputDiv = styled.div`
  width: 100%;
`;

export const ErrorNote = styled.span`
  position: relative;
  top: -0.8em;
  left: 0.8em;

  font-size: 14px;

  color: var(--error);
`;

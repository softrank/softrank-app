import styled from 'styled-components';

interface Props {
  error?: boolean;
}

export default styled.select<Props>`
  --box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  width: 50%;
  padding: 0.6em;
  margin: 0.2em 0 0.8em 0;
  border-radius: var(--radius);

  font-size: 1.2rem;

  appearance: none;
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
    color: var(--gray-500);
    background: var(--gray-50);
    border: 2px solid var(--gray-50);
    pointer-events: none;
  }

  > option {
    background: var(--gray-50);
    color: var(--gray-900);
  }
`;

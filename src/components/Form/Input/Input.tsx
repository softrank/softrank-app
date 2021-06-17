import styled from 'styled-components';

interface Props {
  error?: boolean;
}

export default styled.input<Props>`
  width: 100%;
  padding: 0.6em;
  margin: 0.2em 0 0.8em 0;
  border-radius: 6px;
  font-size: 1.2rem;
  transition: box-shadow 0.3s, border 0.8s;
  outline: none;
  color: ${(props) => (props.error ? 'var(--error)' : 'var(--dark-gray)')};
  border: 2px solid
    ${(props) => (props.error ? 'var(--error)' : 'var(--light-gray)')};

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border: 2px solid var(--accent);
    color: black;
  }

  &:focus {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border: 2px solid var(--accent);
    color: black;
  }

  &::placeholder {
    color: ${(props) => (props.error ? 'var(--error)' : 'var(--medium-gray)')};
  }

  &:disabled {
    color: var(--light-gray);
    background: var(--gray-50);
    border: 2px solid var(--gray-50);
    pointer-events: none;
  }
`;

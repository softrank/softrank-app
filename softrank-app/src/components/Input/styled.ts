import styled from 'styled-components';

interface Props {
  error?: boolean;
}

export const FormInput = styled.input<Props>`
  width: 100%;
  color: ${(props) => (props.error ? 'var(--error)' : 'var(--light-gray)')};
  padding: 0.4em;
  margin: 0.2em 0 0.6em 0;
  border: 1.8px solid
    ${(props) => (props.error ? 'var(--error)' : 'var(--light-gray)')};
  border-radius: 6px;
  transition: box-shadow 0.3s, border 0.8s;
  outline: none;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border: 1.8px solid var(--accent);
    color: black;
  }

  &:focus {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border: 1.8px solid var(--accent);
    color: black;
  }

  &::placeholder {
    color: ${(props) => (props.error ? 'var(--error)' : 'var(--medium-gray)')};
  }

  &:disabled {
    color: var(--light-gray);
    background: var(--gray-50);
    border: 1.8px solid var(--gray-50);
    pointer-events: none;
  }
`;

export const InputLabel = styled.label`
  color: var(--dark-gray);
  padding-left: 0.1em;
`;

export const RequiredSymbol = styled.div`
  color: var(--error);
  font-size: 0.8em;
  display: inline;
`;

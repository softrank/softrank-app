import styled from 'styled-components';

interface Props {
  $error?: boolean;
}

export const StyledInput = styled.input<Props>`
  width: 100%;
  height: 3.2rem;
  padding: 0.6em;
  margin-top: 0.4em;
  border-radius: var(--radius);
  box-sizing: border-box;

  font-size: 16px;

  transition: 0.4s;
  outline: none;
  color: ${(props) => (props.$error ? 'var(--error)' : 'var(--text-color)')};
  border: 2px solid
    ${(props) => (props.$error ? 'var(--error)' : 'var(--border-color)')};
  background-color: var(--background);

  &:hover,
  &:focus {
    box-shadow: var(--box-shadow);
    border: 2px solid var(--purple-500);
    color: var(--text-color);
  }

  &::placeholder {
    color: ${(props) => (props.$error ? 'var(--error)' : 'var(--gray-500)')};
  }

  &:disabled {
    border: 2px solid var(--gray-50);
    background: var(--gray-50);
    color: var(--gray-500);
    pointer-events: none;
  }

  &:-webkit-autofill {
    background-color: ${(props) => props.theme.secundaryBackground};
    -webkit-box-shadow: 0 0 0px 1000px var(--background) inset;
    -webkit-text-fill-color: var(--text-color);
  }
`;

export const InputDiv = styled.div`
  width: 100%;
`;

export const $errorNote = styled.span`
  position: relative;
  top: -0.8em;
  left: 0.8em;

  font-size: 14px;

  color: var(--error);
`;

export const ReadOnlyInput = styled.div`
  background-color: blue;
`;

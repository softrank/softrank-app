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
  color: ${(props) => (props.$error ? 'var(--error)' : props.theme.text)};
  border: 2px solid
    ${(props) => (props.$error ? 'var(--error)' : props.theme.border)};
  background-color: ${({ theme }) => theme.body};

  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.boxShadow};
    border: 2px solid ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.text};
  }

  &::placeholder {
    color: ${(props) => (props.$error ? 'var(--error)' : 'var(--gray-500)')};
  }

  &:disabled {
    border: 2px solid ${({ theme }) => theme.border};
    background: ${({ theme }) => theme.disabledBackground};
    color: ${({ theme }) => theme.disabledText};
    pointer-events: none;

    &::placeholder {
      color: ${({ theme }) => theme.disabledText};
    }
  }

  &:-webkit-autofill {
    background-color: ${({ theme }) => theme.accentBackground};
    -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.body} inset;
    -webkit-text-fill-color: ${({ theme }) => theme.text};
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

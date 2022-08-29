import styled from 'styled-components';

interface Props {
  error?: boolean;
}

export const StyledTextArea = styled.textarea<Props>`
  --box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  width: 100%;
  height: 8em;
  padding: 0.6em;
  margin-top: 0.4em;
  resize: none;

  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto';

  transition: 0.4s;

  color: ${({ error, theme }) => (error ? 'var(--error)' : theme.text)};
  outline: none;
  border-radius: var(--radius);
  border: 2px solid
    ${({ error, theme }) => (error ? 'var(--error)' : theme.border)};

  &:hover,
  &:focus {
    border: 2px solid ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.text};
    box-shadow: ${({ theme }) => theme.boxShadow};
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

  &:-webkit-autofill {
    background-color: ${({ theme }) => theme.accentBackground};
    -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.body} inset;
    -webkit-text-fill-color: ${({ theme }) => theme.text};
  }

  /* #region Scrollbar  */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    margin: 10px;

    background: var(--purple-300);
    border-radius: var(--radius);
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--purple-500);
    border-radius: var(--radius);
  }
  /* #endregion Scrollbar  */
`;

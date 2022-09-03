import styled from 'styled-components';
import Select from 'react-select';

interface Props {
  error?: boolean;
}

export const CustomSelect = styled(Select)<Props>`
  --box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  .select__single-value {
    color: ${({ error, theme }) => (error ? 'var(--error)' : theme.text)};
  }

  .select__control {
    height: 3.2rem;
    margin-top: 0.4em;
    box-sizing: border-box;
    border-radius: var(--radius);

    font-size: 16px;

    transition: 0.4s;
    outline: none;
    background: ${({ theme }) => theme.body};
    border: 2px solid
      ${({ error, theme }) => (error ? 'var(--error)' : theme.border)};

    display: flex;
    align-items: center;
    justify-content: center;

    .select__dropdown-indicator,
    .select__clear-indicator {
      color: ${({ theme }) => theme.border};
    }

    &:hover {
      border-color: none;
      outline: none;
      box-shadow: ${({ theme }) => theme.boxShadow};
      border: 2px solid ${({ theme }) => theme.accent};

      .select__dropdown-indicator,
      .select__clear-indicator {
        color: ${({ theme }) => theme.accent};
      }
    }
  }

  .select__control--is-focused {
    box-shadow: ${({ theme }) => theme.boxShadow};
    border: 2px solid ${({ theme }) => theme.accent};

    .select__dropdown-indicator {
      color: ${({ theme }) => theme.accent};
    }
  }

  .select__control--is-disabled {
    border: 2px solid ${({ theme }) => theme.border};
    background: ${({ theme }) => theme.disabledBackground};

    pointer-events: none;

    .select__single-value {
      color: ${({ theme }) => theme.disabledText};
    }
  }

  .select__indicator-separator {
    display: none;
  }

  .select__option {
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;

    border-radius: var(--radius);
    color: ${({ theme }) => theme.text};
    list-style-type: none;
    transition: all 0.3s ease;
  }

  .select__option--is-focused,
  .select__option:hover {
    color: ${({ theme }) => theme.accent};
    background-color: ${({ theme }) => theme.accentBackground};
  }

  .select__option--is-selected {
    color: ${({ theme }) => theme.accent};
    border: 2px solid ${({ theme }) => theme.accent};
    background-color: ${({ theme }) => theme.body};
  }

  .select__menu {
    border-radius: var(--radius);
    padding: 0.2em 0.3em;
    background-color: ${({ theme }) => theme.body};
    border-radius: var(--radius);
    border: 2px solid ${({ theme }) => theme.border};
    box-shadow: ${({ theme }) => theme.boxShadow};
  }

  .select__multi-value {
    background: ${({ theme }) => theme.accentBackground};
    border-radius: 2px;
  }

  .select__multi-value__label {
    color: ${({ theme }) => theme.accent};
  }

  .select__multi-value__remove {
    color: ${({ theme }) => theme.accent};
  }

  .select__placeholder {
    color: var(--gray-500);
  }
`;

import styled from 'styled-components';
import Select from 'react-select';

interface Props {
  error?: boolean;
}

export const CustomSelect = styled(Select)<Props>`
  --box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  .select__control {
    padding: 0.3em;
    margin: 0.2em 0 0.8em 0;
    height: 3.2rem;
    box-sizing: border-box;
    border-radius: var(--radius);

    font-size: 16px;

    transition: 0.4s;
    outline: none;
    color: ${(props) => (props.error ? 'var(--error)' : 'var(--gray-700)')};
    border: 2px solid
      ${(props) => (props.error ? 'var(--error)' : 'var(--gray-100)')};

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      border-color: none;
      outline: none;
      box-shadow: var(--box-shadow);
      border: 2px solid var(--purple-500);
      color: black;
    }
  }

  .select__control--is-focused {
    box-shadow: var(--box-shadow);
    border: 2px solid var(--purple-500);
    color: black;

    .select__dropdown-indicator {
      color: var(--purple-500);
    }
  }

  .select__control--is-disabled {
    color: var(--gray-500);
    background: var(--gray-50);
    border: 2px solid var(--gray-50);
    pointer-events: none;
  }

  .select__indicator-separator {
    display: none;
  }

  .select__option {
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;

    border-radius: var(--radius);
    color: var(--gray-700);
    list-style-type: none;
    transition: 0.2s;
  }

  .select__option:hover {
    color: var(--white);
    background-color: var(--purple-300);
  }

  .select__option--is-focused,
  .select__option--is-selected {
    color: var(--white);
    background-color: var(--purple-500);
  }

  .select__menu {
    border-radius: var(--radius);
    padding: 0.2em 0.3em;
    background-color: var(--white);
    border-radius: var(--radius);
    border: 1px solid var(--gray-100);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  .select__multi-value {
    background: var(--purple-300);
    border-radius: 2px;
    color: var(--purple-500);
  }
`;

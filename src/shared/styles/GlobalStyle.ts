import * as styled from 'styled-components';

export const GlobalStyles = styled.createGlobalStyle`
  :root {
    --radius: 12px;
    --break: 640px;

    /*#region Colors*/

    --green: #52b788;
    --error: #e57373;
    --white: #faf9f6;

    /* Grays */
    --gray-50: #f4f6fa;
    --gray-100: #e6e8eb;
    --gray-400: #ced4da;
    --gray-500: #adb5bd;
    --gray-600: #6c757d;
    --gray-700: #4f505c;
    --gray-800: #323232;
    --gray-900: #1b1a25;

    /* Purples */
    --purple-50: #eceeff;
    --purple-100: #dcdcff;
    --purple-300: #ccccff;
    --purple-400: #9794ff;
    --purple-500: #625cff;
    --purple-700: #3c389e;
    --purple-800: #16143d;
    --purple-900: #010029;

    /*#endregion Colors*/
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: none;
  }

  body {
    min-width: 320px;

    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background: ${({ theme }) => theme.body};

    overflow-x: hidden;

    /*#region DatePicker*/
    .react-datepicker-wrapper {
      width: 100%;
    }

    .react-datepicker__input-container {
      > input::placeholder {
        color: var(--gray-500);
        font-size: 16px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto';
      }
    }

    .react-datepicker {
      top: -18px;
      border-radius: var(--radius);
      box-sizing: border-box;
      outline: none;
      border: 2px solid ${({ theme }) => theme.border};
      box-shadow: ${({ theme }) => theme.boxShadow};
      background-color: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.text};
    }

    .react-datepicker__triangle {
      display: none;
    }

    .react-datepicker__header {
      color: ${({ theme }) => theme.text};
      border-radius: 10px 10px 0 0 !important;
      background: ${({ theme }) => theme.background};
      border-bottom: 2px solid ${({ theme }) => theme.border};
    }

    .react-datepicker__navigation-icon::before {
      border-color: ${({ theme }) => theme.accent} !important;
    }

    .react-datepicker__day-name,
    .react-datepicker__day,
    .react-datepicker__time-name,
    .react-datepicker__current-month,
    .react-datepicker-time__header,
    .react-datepicker-year-header {
      color: ${({ theme }) => theme.text};
    }

    .react-datepicker__year-text,
    .react-datepicker__year-text--keyboard {
      &:hover {
        background: none;
        color: ${({ theme }) => theme.accent};
      }
    }

    react-datepicker__year,
    .react-datepicker__day--selected,
    .react-datepicker__day--keyboard-selected,
    .react-datepicker__month-text--keyboard-selected,
    .react-datepicker__year-text--selected,
    .react-datepicker__year-text--keyboard-selected {
      background: ${({ theme }) => theme.accentBackground};
      color: ${({ theme }) => theme.accent};
      border: 1.5px solid ${({ theme }) => theme.accent};
      font-weight: 700;
      &:hover {
        background: ${({ theme }) => theme.accentBackground};
        color: ${({ theme }) => theme.text};
      }
    }

    .react-datepicker__day,
    .react-datepicker__month-text,
    .react-datepicker__quarter-text,
    .react-datepicker__year-text {
      &:hover {
        background: ${({ theme }) => theme.accentBackground};
        color: ${({ theme }) => theme.accent};
      }
    }

    /*#endregion DatePicker*/
  }
`;

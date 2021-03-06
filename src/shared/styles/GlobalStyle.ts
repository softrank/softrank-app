import * as styled from 'styled-components';

export const GlobalStyles = styled.createGlobalStyle`
  :root {
    --radius: 12px;
    --break: 640px;

    /*#region Colors*/

    --white: #fff;
    --error: #e57373;

    /* Grays */
    --gray-50: #f4f6fa;
    --gray-100: #e6e8eb;
    --gray-400: #ced4da;
    --gray-500: #adb5bd;
    --gray-600: #6c757d;
    --gray-700: #4f505c;
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
    background: var(---white);
  }

  body {
    min-width: 320px;

    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background: var(--white);

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
      border: 2px solid var(--gray-100);
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
    .react-datepicker__triangle {
      display: none;
    }
    .react-datepicker__header {
      color: black;
      border-radius: 10px 10px 0 0 !important;
      background: var(--gray-50);
      border-bottom: 2px solid var(--gray-100);
    }
    .react-datepicker__navigation-icon::before {
      border-color: var(--gray-500) !important;
    }
    .react-datepicker__day--selected,
    .react-datepicker__day--keyboard-selected,
    .react-datepicker__month-text--keyboard-selected,
    .react-datepicker__year-text--selected,
    .react-datepicker__year-text--keyboard-selected {
      background: var(--purple-500);
      &:hover {
        background: var(--purple-300);
        color: var(--purple-500);
        font-weight: 700;
      }
    }
    /*#endregion DatePicker*/
  }
`;

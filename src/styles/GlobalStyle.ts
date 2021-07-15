import * as styled from 'styled-components';

export const GlobalStyles = styled.createGlobalStyle`
  :root {
    --radius: 12px;
    --break: 640px;

    /* Font sizes */

    --font-size-title-big: 32px;
    --font-size-title: 24px;
    --font-size-text-title: 24px;
    --font-size-text-big: 18px;
    --font-size-text: 16px;
    --font-size-text-small: 14px;
    --font-size-text-smaller: 12px;

    /*#region Colors*/

    --white: #fff;
    --error: #e57373;

    /* Grays */

    --gray-50: #f4f6fa;
    --gray-100: #e6e8eb;
    --gray-500: #babcc6;
    --gray-700: #4f505c;
    --gray-900: #1b1a25;

    /* Purples */

    --light-purple: #ccccff;
    --dark-purple: #625cff;

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

    background: var(--gray-50);

    @media (max-width: 640px) {
      background: var(--white);
    }

    /*#region DatePicker*/
    .react-datepicker-wrapper {
      width: 100%;
    }
    .react-datepicker__input-container {
      > input {
        &::placeholder {
          color: var(--gray-500);
        }
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

    /*#region DatePickerSelected*/
    .react-datepicker__day--selected {
      background: var(--dark-purple);
      &:hover {
        background: var(--light-purple);
        color: var(--dark-purple);
        font-weight: 700;
      }
    }
    .react-datepicker__year-text--selected {
      background: var(--dark-purple);
      &:hover {
        background: var(--light-purple);
        color: var(--dark-purple);
        font-weight: 700;
      }
    }
    .react-datepicker__year-text--keyboard-selected {
      background: var(--dark-purple);
      &:hover {
        background: var(--light-purple);
        color: var(--dark-purple);
        font-weight: 700;
      }
    }
    /*#endregion DatePickerSelected*/

    /*#endregion DatePicker*/
  }
`;

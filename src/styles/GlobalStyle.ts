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
    --font-size-test-smaller: 12px;

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

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-size: 16px;

    background: rgb(98, 92, 255);
    background: linear-gradient(
      17deg,
      rgba(98, 92, 255, 1) 29%,
      rgba(255, 255, 255, 1) 100%
    );
    background: var(--gray-50);
    background-attachment: fixed;

    @media (max-width: 640px) {
      background: var(--white);
    }
  }
`;

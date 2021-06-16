import * as styled from 'styled-components';

export const GlobalStyles = styled.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    background: var(---white);
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: rgb(98, 92, 255);
    background: linear-gradient(
      17deg,
      rgba(98, 92, 255, 1) 29%,
      rgba(255, 255, 255, 1) 100%
    );
    background-attachment: fixed;
  }
  :root {
    --primary: #f7f3f2;
    --accent: #625cff;
    --white: #fff;
    --gray: #d3d3d3;
    --outline: #2f3336;
  }
`;

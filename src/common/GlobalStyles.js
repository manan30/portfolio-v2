import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    height: 100%;
    width: 100%;
    margin: 0;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

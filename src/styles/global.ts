import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #fff;
    color: #444;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font: 16px Roboto, sans-serif;
  }

  #root {
    margin: 0 auto;
    padding: 0;
  }

  button {
    cursor: pointer;
  }
`;

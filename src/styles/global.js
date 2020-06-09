import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    /* 1rem = 10px, 10px(target)/16px(browser-default) = 62.5% */
    font-size: 62.5%;
  }

  body, input, button {
    font-family: 'Raleway', sans-serif;
  }

  button {
    cursor: pointer;
  }

  h1, h2, h3, h4 {
    line-height: 1.5;
    font-weight: 600;
    color: #071D41;
  }

  h2, h3, h4 {
    margin: 28px 0 20px 0;
  }

  h1 {
    font-size: 4.18rem;
    margin-bottom: 32px;
  }

  h2 {
    font-size: 3.484rem;
  }

  h3 {
    font-size: 2.903rem;
  }

  h4 {
    font-size: 2.419rem;
  }

  p {
    font-size: 1.6rem;
    line-height: 1.75;
  }
`;

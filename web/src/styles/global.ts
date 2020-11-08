import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-thumb {
    background: #312e38;
    border-radius: 20px;
  }

  ::-webkit-scrollbar-track {
    background: #6669;
    border-radius: 20px;
  }

  body {
    background: #e7d6bf;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  p {
    font-family: Roboto, sans-serif;
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Roboto Slab', serif;
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;

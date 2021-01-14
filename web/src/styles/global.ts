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
    overflow: hidden;

    div.ReactModalPortal {
      div.ReactModal__Overlay--after-open {
        width: 450px;

        @media(max-width: 500px) {
          width: 330px;
        }

        div.ReactModal__Content--after-open {
          width: 450px;

          @media(max-width: 500px) {
            width: 330px;
          }
          -webkit-box-shadow: rgba(0,0,0,0.8) 0px 0 10px;
          -moz-box-shadow: rgba(0,0,0,0.8) 0 0 10px;
          box-shadow: rgba(0,0,0,0.8) 0 0 10px;
        }

        &::before {
          content: '';
          border-style: solid;
          border-color: #e7d6bf transparent;
          border-width: 17px 10px 0 10px;
          top: 100%;
          position: absolute;
          right: 2%;
          transform: translateX(-9%);
        }
      }
    }
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

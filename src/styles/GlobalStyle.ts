import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    fontFamily: "RickAndMortyFont1, sans-serif"
    background-color: #f0f0f0;
  }
`;
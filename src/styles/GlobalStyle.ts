import { createGlobalStyle } from 'styled-components';
import GetSchwifty from '../assets/fonts/get_schwifty.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'RickAndMorty';
    src: url(${GetSchwifty}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    background-color: ${({ theme }) => theme.colors.background.main};
    color: ${({ theme }) => theme.colors.text.primary};
    line-height: 1.5;
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ::selection {
    background-color: ${({ theme }) => theme.colors.state.hover};
    color: ${({ theme }) => theme.colors.text.light};
  }
`;
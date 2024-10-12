import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      paginationButton: {
        background: string;
        color: string;
        hoverBackground: string;
      };
      clearButton: {
        background: string;
        color: string;
        hoverBackground: string;
      };
    };
  }
}

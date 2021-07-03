import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      inputBackground: string;
      inputBorder: string;
      answered: string;
      highlighted: string;
      border: string;
      red: string;
    }
  }
}
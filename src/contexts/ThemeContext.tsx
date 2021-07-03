import { createContext, ReactNode, useEffect, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

import GlobalStyle from '../styles/global';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

type ThemeContextType = {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

type ThemeContextProviderProps = {
  children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<DefaultTheme>(() => {
    const storageValue = localStorage.getItem('theme');

    if (storageValue === 'dark') {
      return dark;
    } else {
      return light;
    }
  });

  useEffect(() => {
    localStorage.setItem('theme', theme.title);
  })

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={ theme }>
        <GlobalStyle />
        { children }
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
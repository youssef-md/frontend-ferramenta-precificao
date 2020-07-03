import React, { useState, useCallback, createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Routes from './routes';

import defaultTheme from './styles/defaultTheme';
import darkTheme from './styles/darkTheme';

export const ThemeSwitcherContext = createContext();

function App() {
  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = useCallback(
    () => setTheme(theme === defaultTheme ? darkTheme : defaultTheme),
    [theme]
  );

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ThemeSwitcherContext.Provider value={{ toggleTheme }}>
          <Routes />
          <GlobalStyle />
        </ThemeSwitcherContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

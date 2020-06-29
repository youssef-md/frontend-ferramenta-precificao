import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Routes from './routes';

import defaultTheme from './styles/defaultTheme';
import darkTheme from './styles/darkTheme';

function App() {
  const [theme, setTheme] = useState(defaultTheme);

  function changeTheme() {
    setTheme(theme === defaultTheme ? darkTheme : defaultTheme);
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
        <button onClick={changeTheme}>Switch Theme</button>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

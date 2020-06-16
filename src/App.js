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
        <button onClick={changeTheme}>Switch Theme</button>
        <Routes />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

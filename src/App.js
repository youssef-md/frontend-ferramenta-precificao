import React, { useState, useCallback, createContext, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Routes from './routes';

import defaultTheme from './styles/defaultTheme';
import darkTheme from './styles/darkTheme';
import api from './service/api';
import ScrollToTop from './components/ScrollToTop';

const GeneralAppContext = createContext();

export function useGeneralAppContext() {
  return useContext(GeneralAppContext);
}

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [theme, setTheme] = useState(defaultTheme);
  const [userToken, setUserToken] = useState(
    function retrieveFromStorageIfExists() {
      const token = localStorage.getItem('@ferramenta-precificacao:token');
      if (token) {
        api.defaults.headers.common = { Authorization: `Bearer ${token}` };
        return token;
      }
      return null;
    }
  );

  const openLoginModal = useCallback(() => setShowLoginModal(true), []);
  const closeLoginModal = useCallback(() => setShowLoginModal(false), []);

  const toggleTheme = useCallback(
    () => setTheme(theme === defaultTheme ? darkTheme : defaultTheme),
    [theme]
  );

  const logUserOut = useCallback(() => {
    localStorage.removeItem('@ferramenta-precificacao:token');
    setUserToken(null);
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GeneralAppContext.Provider
          value={{
            userToken,
            setUserToken,
            logUserOut,
            toggleTheme,
            showLoginModal,
            openLoginModal,
            closeLoginModal,
          }}
        >
          <ScrollToTop />
          <Routes />
          <GlobalStyle />
        </GeneralAppContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

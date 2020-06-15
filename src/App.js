import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Button from './components/Button';
import GlobalStyle from './styles/global';

import defaultTheme from './styles/defaultTheme';
import darkTheme from './styles/darkTheme';
import Input from './components/Input';

function App() {
  const [theme, setTheme] = useState(defaultTheme);

  function changeTheme() {
    setTheme(theme === defaultTheme ? darkTheme : defaultTheme);
  }

  return (
    <ThemeProvider theme={theme}>
      <button onClick={changeTheme}>Switch Theme</button>
      <h1>Análise de Custos de Serviços</h1>
      <h2>Participar de Processo Seletivo para Curso de Graduação UnB</h2>
      <h3>Etapa 1: Custos de Pessoal</h3>
      <h4>Fundação Universidade de Brasília (UnB)</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis corrupti,
        deleniti eveniet quidem cum earum ullam aspernatur error delectus ad,
        tempora beatae excepturi, mollitia asperiores voluptate provident
        aliquid molestias quos?
      </p>
      <GlobalStyle />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '500px',
          maxWidth: '400px',
          margin: 'auto',
        }}
      >
        <Input label="Custos de Infra" />

        <Button type="primary">
          Entrar com <strong>gov.br</strong>
        </Button>
        <Button type="primary" loading>
          Entrar com <strong>gov.br</strong>
        </Button>
        <Button type="primary" disabled>
          Entrar com <strong>gov.br</strong>
        </Button>

        <Button type="secondary">
          Entrar com <strong>gov.br</strong>
        </Button>
        <Button type="secondary" loading>
          Entrar com <strong>gov.br</strong>
        </Button>
        <Button type="secondary" disabled>
          Entrar com <strong>gov.br</strong>
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;

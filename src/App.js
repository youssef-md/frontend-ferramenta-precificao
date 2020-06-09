import React from 'react';

import Button from './components/Button';
import GlobalStyle from './styles/global';

function App() {
  function sayHello() {
    console.log('oi');
  }

  return (
    <>
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
      <Button onClick={sayHello} color="#000" />
    </>
  );
}

export default App;

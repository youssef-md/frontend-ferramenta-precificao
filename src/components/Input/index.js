import React from 'react';

import { Container } from './styles';

function Input({ label }) {
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <input id={label} placeholder="Insira um texto" />
    </Container>
  );
}

export default Input;

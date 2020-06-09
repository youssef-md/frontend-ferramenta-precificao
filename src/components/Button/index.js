import React from 'react';
import { ButtonStyle } from './styles';

function Button({ onClick, type }) {
  return (
    <ButtonStyle type={type} onClick={onClick}>
      Logar
    </ButtonStyle>
  );
}

export default Button;

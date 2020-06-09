import React from 'react';
import { ButtonStyle } from './styles';

function Button({ onClick, type, children }) {
  return (
    <ButtonStyle type={type} onClick={onClick}>
      {children}
    </ButtonStyle>
  );
}

export default Button;

import React from 'react';

import { ButtonStyle } from './styles';
import CircularLoader from '../CircularLoader';

function Button({ onClick, disabled, type, loading, children }) {
  return (
    <ButtonStyle type={type} onClick={onClick} disabled={disabled}>
      {loading ? <CircularLoader color="white" /> : children}
    </ButtonStyle>
  );
}

export default Button;

import React from 'react';

import { ButtonStyle } from './styles';
import CircularLoader from '../CircularLoader';

function Button({ onClick, disabled, type, loading, children, className }) {
  return (
    <ButtonStyle
      type={type}
      onClick={onClick}
      disabled={disabled}
      loading={loading}
      className={className}
    >
      {loading ? (
        <CircularLoader color={type === 'primary' ? '#fff' : '#1351B4'} />
      ) : (
        children
      )}
    </ButtonStyle>
  );
}

export default Button;

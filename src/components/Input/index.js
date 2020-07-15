import React, { useRef, useEffect } from 'react';
import {
  FaTimesCircle,
  FaCheckCircle,
  FaEye,
  FaEyeSlash,
} from 'react-icons/fa';
import { useField } from '@unform/core';

import { Container, Invalid, Valid, TogglePassword } from './styles';

function Input({
  name,
  type,
  label,
  placeholder,
  auxiliaryText,
  valid,
  invalid,
  className,
  seePassword,
  onSetSeePassword,
}) {
  const inputRef = useRef(null);
  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container className={className} valid={valid} invalid={invalid}>
      <label htmlFor={label}>{label}</label>
      <input
        ref={inputRef}
        id={label}
        placeholder={placeholder}
        type={seePassword ? 'text' : type}
      />
      {type === 'password' && (
        <TogglePassword onClick={onSetSeePassword}>
          {seePassword ? <FaEyeSlash size={22} /> : <FaEye size={22} />}
        </TogglePassword>
      )}
      <p>{!invalid && !valid && auxiliaryText}</p>
      {valid && (
        <Valid>
          <FaCheckCircle size={16} />
          <p>Texto válido</p>
        </Valid>
      )}

      {invalid && (
        <Invalid>
          <FaTimesCircle size={16} />
          <p>Texto inválido</p>
        </Invalid>
      )}
    </Container>
  );
}

export default Input;

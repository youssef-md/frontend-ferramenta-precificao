import React from 'react';
import { FaTimesCircle, FaCheckCircle } from 'react-icons/fa';
import { Container, Invalid, Valid } from './styles';

function Input({
  type,
  label,
  placeholder,
  auxiliaryText,
  valid,
  invalid,
  className,
}) {
  return (
    <Container className={className} valid={valid} invalid={invalid}>
      <label htmlFor={label}>{label}</label>
      <input id={label} placeholder={placeholder} type={type} />
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

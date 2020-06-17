import React from 'react';
import { FaTimesCircle, FaCheckCircle } from 'react-icons/fa';
import { Container, Invalid, Valid } from './styles';

function Input({ label, auxiliaryText, valid, invalid, type, placeholder }) {
  return (
    <Container valid={valid} invalid={invalid}>
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

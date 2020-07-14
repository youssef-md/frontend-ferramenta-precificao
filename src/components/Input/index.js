import React from 'react';
import {
  FaTimesCircle,
  FaCheckCircle,
  FaEye,
  FaEyeSlash,
} from 'react-icons/fa';
import { Container, Invalid, Valid, TogglePassword } from './styles';

function Input({
  type,
  label,
  placeholder,
  auxiliaryText,
  valid,
  invalid,
  className,
  value,
  onValueChange,
  seePassword,
  onSetSeePassword,
}) {
  return (
    <Container className={className} valid={valid} invalid={invalid}>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        placeholder={placeholder}
        type={seePassword ? 'text' : type}
        value={value}
        onChange={onValueChange}
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

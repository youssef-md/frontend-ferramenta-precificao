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
  maskType,
}) {
  const inputRef = useRef(null);
  const { fieldName, registerField, error, defaultValue } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleNumber = e => {
    const [, entryValue] = e.target.value.split(' ');

    if (!entryValue) {
      const result = Number(
        (e.target.value / 100).toFixed(2)
      ).toLocaleString('pt-br', { minimumFractionDigits: 2 });

      e.target.value = `R$ ${result}`;
      return;
    }

    const value = Number(entryValue.replaceAll('.', '').replaceAll(',', ''));

    if (value === 0) {
      e.target.value = '';
      return;
    }

    const result = parseFloat((value / 100).toFixed(2)).toLocaleString(
      'pt-br',
      { minimumFractionDigits: 2 }
    );

    e.target.value = `R$ ${result}`;
  };

  return (
    <Container className={className} valid={valid} invalid={error}>
      <label htmlFor={label}>{label}</label>
      <input
        ref={inputRef}
        value={defaultValue}
        id={label}
        placeholder={placeholder}
        type={seePassword ? 'text' : type}
        onChange={maskType === 'money' ? handleNumber : null}
      />
      {type === 'password' && (
        <TogglePassword onClick={onSetSeePassword}>
          {seePassword ? <FaEyeSlash size={22} /> : <FaEye size={22} />}
        </TogglePassword>
      )}
      <p>{!error && !valid && auxiliaryText}</p>
      {valid && (
        <Valid>
          <FaCheckCircle size={16} />
          <p>Texto válido</p>
        </Valid>
      )}

      {error && (
        <Invalid>
          <FaTimesCircle size={16} />
          <p>{error}</p>
        </Invalid>
      )}
    </Container>
  );
}

export default Input;

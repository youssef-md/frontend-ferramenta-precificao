import { useField } from '@unform/core';
import React, { useEffect, useRef } from 'react';
import ReactSelect from 'react-select';

import { Container } from './styles';

export default function Select({ name, label, ...rest }) {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: ref => {
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <Container>
      <label>{label}</label>

      <div style={{ width: '100%', fontSize: 14 }}>
        <ReactSelect
          defaultValue={defaultValue}
          ref={selectRef}
          classNamePrefix="react-select"
          {...rest}
        />
      </div>
    </Container>
  );
}

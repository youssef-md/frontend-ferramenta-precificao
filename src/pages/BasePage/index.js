import React from 'react';
import Navbar from '../../components/Navbar';
import { Container } from './styles';

function BasePage({ children }) {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
    </>
  );
}

export default BasePage;

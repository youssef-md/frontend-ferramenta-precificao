import React from 'react';
import Navbar from '../../components/Navbar';
import { Container } from './styles';
import Footer from '../../components/Footer';

function BasePage({ children }) {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </>
  );
}

export default BasePage;

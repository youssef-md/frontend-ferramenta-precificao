import React from 'react';
import Navbar from '../../components/Navbar';
import { Container } from './styles';
import Footer from '../../components/Footer';

function BasePage({ children }) {
  return (
    <>
      {/* exportar a altura da navbar e usar no style, pois como ela vai mudar, a margin top tem que mudar também,
       ou fazer o mesmo com o offset usando o translateY */}
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </>
  );
}

export default BasePage;

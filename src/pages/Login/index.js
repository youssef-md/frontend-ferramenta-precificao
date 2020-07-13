import React from 'react';

import { Container, Content, Backdrop } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useGeneralAppContext } from '../../App';

function Login() {
  const { closeLoginModal } = useGeneralAppContext();

  return (
    <Container>
      <Content>
        <h4>Login Ferramenta Precificação</h4>
        <Input label="CPF" />
        <Input label="Senha" />
        <Button type="primary">Entrar</Button>
      </Content>
      <Backdrop onClick={closeLoginModal} />
    </Container>
  );
}

export default Login;

import React, { useCallback, useState } from 'react';

import { useHistory } from 'react-router-dom';
import { Container, Form, Backdrop } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useGeneralAppContext } from '../../App';

import api from '../../service/api';
import { LISTAR_SERVICOS } from '../../routes/routeObjects';

function Login() {
  const history = useHistory();
  const { closeLoginModal, setUserToken } = useGeneralAppContext();

  const [seePassword, setSeePassword] = useState(false);
  const [loading, setIsLoading] = useState(false);

  const submitLogin = useCallback(
    async ({ cpf, password }) => {
      setIsLoading(true);

      try {
        const {
          data: { token },
        } = await api.post('auth', { email: cpf, password });

        setUserToken(token);
        api.defaults.headers.common = { Authorization: `Bearer ${token}` };
        localStorage.setItem('@ferramenta-precificacao:token', token);

        history.push(LISTAR_SERVICOS.route);
      } catch (error) {
        alert('Erro ao logar na aplicação');
      } finally {
        setIsLoading(false);
      }
    },
    [history, setUserToken]
  );

  const togglePassword = useCallback(
    event => {
      event.preventDefault();
      setSeePassword(!seePassword);
    },
    [seePassword]
  );

  return (
    <Container>
      <Form onSubmit={submitLogin}>
        <h4>Login Ferramenta Precificação</h4>
        <Input name="cpf" type="number" label="CPF" />
        <Input
          name="password"
          type="password"
          seePassword={seePassword}
          onSetSeePassword={togglePassword}
          label="Senha"
        />
        <Button type="primary" loading={Number(loading)}>
          Entrar
        </Button>
      </Form>
      <Backdrop onClick={closeLoginModal} />
    </Container>
  );
}

export default Login;

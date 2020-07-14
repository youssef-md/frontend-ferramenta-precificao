import React, { useCallback, useState } from 'react';

import { useHistory } from 'react-router-dom';
import { Container, Content, Backdrop } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useGeneralAppContext } from '../../App';

import api from '../../service/api';
import { LISTA_SERVICOS } from '../../routes/routeObjects';

function Login() {
  const history = useHistory();
  const { closeLoginModal, setUserToken } = useGeneralAppContext();

  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [seePassword, setSeePassword] = useState(false);
  const [loading, setIsLoading] = useState(false);

  const submitLogin = useCallback(
    async event => {
      setIsLoading(true);
      event.preventDefault();

      try {
        const {
          data: { token },
        } = await api.post('auth', {
          email: cpf,
          password,
        });
        setUserToken(token);
        api.defaults.headers.common = { Authorization: `Bearer ${token}` };
        localStorage.setItem('@ferramenta-precificacao:token', token);

        history.push(LISTA_SERVICOS.route);
      } catch (error) {
        alert('Erro ao logar na aplicação');
      } finally {
        setIsLoading(false);
      }
    },
    [cpf, password, history, setUserToken]
  );

  const togglePassword = useCallback(event => {
    event.preventDefault();
    setSeePassword(!seePassword);
  });

  return (
    <Container>
      <Content>
        <h4>Login Ferramenta Precificação</h4>
        <Input
          type="number"
          label="CPF"
          value={cpf}
          onValueChange={e => setCpf(e.target.value)}
        />
        <Input
          type="password"
          seePassword={seePassword}
          onSetSeePassword={togglePassword}
          label="Senha"
          value={password}
          onValueChange={e => setPassword(e.target.value)}
        />
        <Button type="primary" onClick={submitLogin} loading={Number(loading)}>
          Entrar
        </Button>
      </Content>
      <Backdrop onClick={closeLoginModal} />
    </Container>
  );
}

export default Login;

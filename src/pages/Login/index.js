import React, { useCallback, useState } from 'react';

import { Container, Content, Backdrop } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useGeneralAppContext } from '../../App';

import api from '../../service/api';

function Login() {
  const { closeLoginModal } = useGeneralAppContext();

  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [seePassword, setSeePassword] = useState(false);

  const submitLogin = useCallback(async event => {
    event.preventDefault();

    const res = await api.post('auth', {
      email: '03717970127',
      password: 'itracunb',
    });

    console.log(res.data);
  }, []);

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
        <Button type="primary" onClick={submitLogin}>
          Entrar
        </Button>
      </Content>
      <Backdrop onClick={closeLoginModal} />
    </Container>
  );
}

export default Login;

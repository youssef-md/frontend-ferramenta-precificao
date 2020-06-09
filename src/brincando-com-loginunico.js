import React, { useEffect } from 'react';

import axios from 'axios';

function App() {
  useEffect(() => {
    // https://auth-sso.dev-ecacpgfn.estaleiro.serpro.gov.br/api/login
    // ?response_type=code
    // &client_id=ec4318d6-f797-4d65-b4f7-39a33bf4d544
    // &scope=openid+email+phone+profile
    // &redirect_uri=http%3A%2F%2Fappcliente.com.br%2Fphpcliente%2Floginecidadao.Php&nonce=3ed8657fd74c&state=358578ce6728b
    // https://cors-anywhere.herokuapp.com/
    //  Denatran
    // https://sso.acesso.gov.br/authorize?response_type=code&client_id=portalservicos.denatran.serpro.gov.br&scope=openid+profile+email+govbr_empresa&redirect_uri=https%3A%2F%2Fportalservicos.denatran.serpro.gov.br%2FloginRetorno.html&nonce=36d4c7e2f346e&state=3e34adde59973
    // axios.get('https://sso.staging.acesso.gov.br/authorize?response_type=code&client_id=ec4318d6-f797-4d65-b4f7-39a33bf4d544&scope=openid+email+phone+profile&redirect_uri=http%3A%2F%2Fappcliente.com.br%2Fphpcliente%2Floginecidadao.Php&nonce=3ed8657fd74c&state=358578ce6728b').then(res => {
    // console.log(res.data)
    // })
  }, []);

  function openNewWindow() {
    axios
      .get('https://cors-anywhere.herokuapp.com/https://www.google.com')
      .then(res => {
        const govbrPopup = window.open('', 'Título', 'height=500, width=500');
        govbrPopup.document.write(res.data);
      });
  }

  return <button onClick={openNewWindow}>Entrar com gov.br</button>;
}

export default App;

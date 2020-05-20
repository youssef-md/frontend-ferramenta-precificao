import React from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import { useState } from 'react';

function App() {

  const [html, setHtml] = useState('') 

  useEffect(() => {
    // async function getSeila() {
    //   const res = await axios.get('https://sso.staging.acesso.gov.br/authorize')
    //   console.log(res.data)
    // }
    // getSeila()
    // https://auth-sso.dev-ecacpgfn.estaleiro.serpro.gov.br/api/login

    // ?response_type=code
    // &client_id=ec4318d6-f797-4d65-b4f7-39a33bf4d544
    // &scope=openid+email+phone+profile
    // &redirect_uri=http%3A%2F%2Fappcliente.com.br%2Fphpcliente%2Floginecidadao.Php&nonce=3ed8657fd74c&state=358578ce6728b


    // https://cors-anywhere.herokuapp.com/
    
    // axios.get('https://cors-anywhere.herokuapp.com/https://auth-sso.dev-ecacpgfn.estaleiro.serpro.gov.br/api/login?response_type=code&scope=openid+email+phone+profile&redirect_uri=http%3A%2F%2Fappcliente.com.br%2Fphpcliente%2Floginecidadao.Php&nonce=3ed8657fd74c&state=358578ce6728b').then(data => {
    //   console.log(data)
    // })

    axios.get('https://sso.staging.acesso.gov.br/authorize?response_type=code&client_id=ec4318d6-f797-4d65-b4f7-39a33bf4d544&scope=openid+email+phone+profile&redirect_uri=http%3A%2F%2Fappcliente.com.br%2Fphpcliente%2Floginecidadao.Php&nonce=3ed8657fd74c&state=358578ce6728b').then(res => {
      console.log(res.data)
      setHtml(res.data)
    })
  }, [])

  

  return <html dangerouslySetInnerHTML={{ __html: html}}/>
}

export default App;

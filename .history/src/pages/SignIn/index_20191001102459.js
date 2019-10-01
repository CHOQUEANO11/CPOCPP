import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/distintivo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória')
});

export default function SignIn() {
  const [loading, setLoading] = useState(false);

  function handleSubmit({ cpf, password }) {
    setLoading(true);
  }
  return (
    <>
      <img src={logo} alt="GoBarber" width="100" height="120" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="cpf" type="number" placeholder="Seu CPF" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
        <p> CPO | CPP </p>
      </Form>
    </>
  );
}

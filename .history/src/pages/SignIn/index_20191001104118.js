import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/distintivo.png';

const schema = Yup.object().shape({
  cpf: Yup.number('cdcdcdd').min(18),
  password: Yup.string().required('A senha é obrigatória')
});

export default function SignIn() {
  const [loading, setLoading] = useState(false);

  function handleSubmit() {
    setLoading(true);
    console.log(loading);
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

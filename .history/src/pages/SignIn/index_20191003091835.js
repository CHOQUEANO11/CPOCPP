import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import md5 from 'md5';
import { toast } from 'react-toastify';
import ReCAPTCHA from 'react-google-recaptcha';

import logo from '../../assets/distintivo.png';

import api from '../../services/api';
import history from '../../services/history';

const recaptchaRef = React.createRef();

const schema = Yup.object().shape({
  cpf: Yup.number()
    .min(11, 'O campo CPF deve ser preenchido')
    .typeError('O campo CPF deve ser preenchido1'),
  password: Yup.string().required('A senha é obrigatória')
});

export default function SignIn() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit({ cpf, password }) {
    const senha = await md5(password);
    await setLoading(true);
    recaptchaRef.current.execute();
    const response = await api
      .post('api/v1/auth/appidentidade', {
        cpf,
        senha
      })
      .catch(() => {
        toast.error('Falha na autenticação, verifique seus dados!');
        setLoading(false);
      });
    if (response.data.payload.token !== '') {
      localStorage.setItem('data', response.data.payload);
      // api.defaults.headers.Authorization = `X-Token ${response.data.payload.token}`;
      history.push('/home');
    }
  }

  return (
    <>
      <img src={logo} alt="PMPA" width="100" height="120" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="cpf" type="number" placeholder="Seu CPF" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          sitekey="6Lf1SbIUAAAAACZ4oyCaQ1zMkhqr-ZGLmbe1N2kR"
        />

        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
        <p> CPO | CPP </p>
      </Form>
    </>
  );
}

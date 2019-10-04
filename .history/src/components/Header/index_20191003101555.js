import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import logo from '../../assets/distintivo.png';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const [data, setData] = useState({});
  const [graduacao, setGraduacao] = useState({});

  useEffect(() => {
    async function personInformation() {
      const info = await JSON.parse(localStorage.getItem('data'));
      await setData(info);
      await setGraduacao(info.Graduacao);
      console.log(info);
    }
    personInformation();
  }, []);

  let idpessoa = data.idpessoa.toString();
  idpessoa = idpessoa.split('');
  idpessoa = idpessoa.join('/');
  const url = `https://sigpol.pm.pa.gov.br/upload/pessoa/${idpessoa}/foto.jpg`;

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" width="58" height="46" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>
                {`${graduacao.graduacao} ${' '}`} {data.nome_guerra}
              </strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img src={url} alt="oi" />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import logo from '../../assets/distintivo.png';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const [data, setData] = useState({});
  const [graduacao, setGraduacao] = useState({});
  const [idpessoa, setIdpessoa] = useState('');

  useEffect(() => {
    async function personInformation() {
      const info = await JSON.parse(localStorage.getItem('data'));
      await setData(info);
      await setGraduacao(info.Graduacao);
      await setIdpessoa(info.idpessoa.toString());
    }
    personInformation();
  }, []);

  let person = idpessoa.split('');
  person = person.join('/');
  const url = `https://sigpol.pm.pa.gov.br/upload/pessoa/${person}/foto.jpg`;

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

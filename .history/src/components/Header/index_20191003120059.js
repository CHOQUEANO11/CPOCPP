import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import logo from '../../assets/distintivo.png';

import { Container, Content, Profile } from './styles';
import InfoPerson from '../InfoPerson';

export default function Header() {
  const [data, setData] = useState({});
  const [graduacao, setGraduacao] = useState({});
  const [idpessoa, setIdpessoa] = useState('');
  const [visible, setVisible] = useState(false);

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
              <p
                onClick={() => (visible ? setVisible(true) : setVisible(false))}
              >
                Meu perfil
              </p>
              <InfoPerson visible />
            </div>
            <img src={url} alt={data.nome_guerra} />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

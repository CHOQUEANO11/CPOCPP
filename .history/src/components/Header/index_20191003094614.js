import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import logo from '../../assets/distintivo.png';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function personInformation() {
      const info = await JSON.parse(localStorage.getItem('data'));
      await setData(info);
    }
    personInformation();
  }, []);

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
              <strong>{data.nome_guerra}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="oi"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

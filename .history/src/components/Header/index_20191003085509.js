import React from 'react';

import { Link } from 'react-router-dom';

import logo from '../../assets/distintivo.png';

import { Container, Content, Profile } from './styles';

export default function Header(resp) {
  console.log(resp);
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
              <strong>Everton Olveira</strong>
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

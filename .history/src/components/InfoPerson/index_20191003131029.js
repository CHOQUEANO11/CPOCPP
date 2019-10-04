import React, { useEffect, useState } from 'react';

import { Container, Scroll, NotificationList, Notification } from './styles';
import history from '../../services/history';

export default function InfoPerson() {
  const [data, setData] = useState({});
  const [unidade, setUnidade] = useState({});
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    async function personInformation() {
      const info = await JSON.parse(localStorage.getItem('data'));
      await setData(info);
      await setUnidade(info.Unidade);
    }
    personInformation();
  }, []);

  function handleVisible() {
    setVisible(!visible);
  }

  function exit() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <Container>
      <p onClick={() => handleVisible()}>Meu Perfil</p>
      <NotificationList visible={visible}>
        <Scroll>
          <Notification>Unidade: {unidade.sigla_unidade}</Notification>
          <Notification>RG: {data.rg}</Notification>
          <Notification>
            <button onClick={exit} type="button">
              Sair
            </button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}

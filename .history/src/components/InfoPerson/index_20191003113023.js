import React, { useEffect, useState } from 'react';

import { Container, Scroll, NotificationList, Notification } from './styles';

export default function InfoPerson() {
  const [data, setData] = useState({});
  const [unidade, setunidade] = useState({});

  useEffect(() => {
    async function personInformation() {
      const info = await JSON.parse(localStorage.getItem('data'));
      await setData(info);
      await setunidade(info.Unidade);
    }
    personInformation();
  }, []);
  console.log(data);

  const visible = true;

  return (
    <Container>
      <NotificationList visible={visible}>
        <Scroll>
          <Notification>Unidade: {unidade.sigla_unidade}</Notification>
          <Notification>Função: {data.}</Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}

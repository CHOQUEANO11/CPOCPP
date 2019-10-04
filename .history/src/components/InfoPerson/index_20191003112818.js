import React, { useEffect, useState } from 'react';

import { Container, Scroll, NotificationList, Notification } from './styles';

export default function InfoPerson() {
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
  const visible = true;
  return (
    <Container>
      <NotificationList visible={visible}>
        <Scroll>
          <Notification>Unidade: {sigla_unidade}</Notification>
          <Notification>Unidade: {sigla_unidade}</Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}

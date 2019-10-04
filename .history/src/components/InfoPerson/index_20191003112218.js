import React from 'react';

import { Container, Scroll, NotificationList, Notification } from './styles';

export default function InfoPerson({ sigla_unidade, data }) {
  console.log(sigla_unidade, data);
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

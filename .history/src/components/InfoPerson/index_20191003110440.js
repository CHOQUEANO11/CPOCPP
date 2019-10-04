import React from 'react';

import { Container, Scroll, NotificationList } from './styles';

export default function InfoPerson({ Graduacao, Unidade }) {
  console.log(Unidade);
  const visible = true;
  return (
    <Container>
      <NotificationList visible={visible}>
        <Scroll />
      </NotificationList>
    </Container>
  );
}

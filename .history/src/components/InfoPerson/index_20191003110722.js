import React from 'react';

import { Container, Scroll, NotificationList } from './styles';

export default function InfoPerson({ Unidade, ...res }) {
  const visible = true;
  return (
    <Container>
      <NotificationList visible={visible}>
        <Scroll>Unidade: {Unidade.sigla}</Scroll>
      </NotificationList>
    </Container>
  );
}

import React from 'react';

import { Container, Scroll, NotificationList } from './styles';

export default function InfoPerson({ Unidade, ...res }) {
  console.log(Unidade.sigla_unidade);
  const visible = true;
  return (
    <Container>
      <NotificationList visible={visible}>
        <Scroll>Unidade: </Scroll>
      </NotificationList>
    </Container>
  );
}

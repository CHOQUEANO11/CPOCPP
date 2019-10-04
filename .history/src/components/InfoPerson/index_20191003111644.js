import React from 'react';

import { Container, Scroll, NotificationList } from './styles';

export default function InfoPerson({ sigla_unidade }) {
  console.log(sigla_unidade);
  const visible = true;
  return (
    <Container>
      <NotificationList visible={visible}>
        <Scroll>Unidade: {sigla_unidade}</Scroll>
      </NotificationList>
    </Container>
  );
}

import React from 'react';

import { Container, Scroll, NotificationList } from './styles';

export default function InfoPerson({ sigla_unidade }) {
  console.log(props);
  const visible = true;
  return (
    <Container>
      <NotificationList visible={visible}>
        <Scroll>Unidade: </Scroll>
      </NotificationList>
    </Container>
  );
}

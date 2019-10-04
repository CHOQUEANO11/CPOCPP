import React from 'react';

import { Container, Scroll, NotificationList } from './styles';

export default function InfoPerson(props) {

  console.log(Props);
  const visible = true;
  return (
    <Container>
      <NotificationList visible={visible}>
        <Scroll>Unidade: </Scroll>
      </NotificationList>
    </Container>
  );
}

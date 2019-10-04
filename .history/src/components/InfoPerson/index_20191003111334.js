import React from 'react';

import { Container, Scroll, NotificationList } from './styles';

export default function InfoPerson(props) {
  const [Unidade] = props;
  console.log(Unidade);
  const visible = true;
  return (
    <Container>
      <NotificationList visible={visible}>
        <Scroll>Unidade: </Scroll>
      </NotificationList>
    </Container>
  );
}

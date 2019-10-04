import React from 'react';

import { Container, Scroll, NotificationList, Notification } from './styles';

export default function InfoPerson() {
  return (
    <Container>
      <NotificationList visible={visible}>
        <Scroll />
      </NotificationList>
    </Container>
  );
}

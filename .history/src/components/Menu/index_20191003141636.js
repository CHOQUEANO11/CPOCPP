import React from 'react';
import { SideNav, Nav, NavContext } from 'react-sidenav';
// import { Container } from './styles';

export default function Menu() {
  return (
    <SideNav defaultSelectedPath="1">
      <Nav id="1" />
      <Nav id="2" />
      <Nav id="3" />
    </SideNav>
  );
}

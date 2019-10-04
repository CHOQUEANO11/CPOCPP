import React from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import { Container, Icon, IconCPO, IconCPP } from './styles';

export default function Menu() {
  return (
    <Container
      className="SideNav"
      onSelect={selected => {
        // Add your code here
      }}
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
          <NavIcon>
            <Icon size={20} />
          </NavIcon>
          <NavText>Home</NavText>
        </NavItem>
        <NavItem eventKey="cpo">
          <NavIcon>
            <IconCPO size={20} />
          </NavIcon>
          <NavText>CPO</NavText>
          <NavItem eventKey="charts/linechart">
            <NavText>Line Chart</NavText>
          </NavItem>
          <NavItem eventKey="charts/barchart">
            <NavText>Bar Chart</NavText>
          </NavItem>
        </NavItem>
        <NavItem eventKey="cpp">
          <NavIcon>
            <IconCPP size={20} />
          </NavIcon>
          <NavText>Home</NavText>
        </NavItem>
      </SideNav.Nav>
    </Container>
  );
}

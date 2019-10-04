import React from 'react';
import { SideNav, Nav, NavContext } from 'react-sidenav';
// import { Container } from './styles';

export default function Menu() {
  return (
    <SideNav defaultSelectedPath="1">
      <Nav id="1">
        <NavItem icon={dashboardIcon} title={'Dashboard'} />
      </Nav>
      <Nav id="2">
        <NavItem icon={transactionsIcon} title={'Transactions'} />
        <Nav id="1">
          <SubNavItem>Orders</SubNavItem>
        </Nav>
        <Nav id="2">
          <SubNavItem>Refunds</SubNavItem>
        </Nav>
        <Nav id="3">
          <SubNavItem>Deliveries</SubNavItem>
        </Nav>
      </Nav>
      <Nav id="3">
        <NavItem icon={usersIcon} title={'Users'} />
      </Nav>
    </SideNav>
  );
}

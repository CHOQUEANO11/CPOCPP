import React from 'react';

import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

// import { Container } from './styles';

export default function Menu() {
  return (
    <>
      <SideNav
        onSelect={selected => {
          const to = `/${selected}`;
          if (location.pathname !== to) {
            history.push(to);
          }
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>
          <NavItem eventKey="devices">
            <NavIcon>
              <i
                className="fa fa-fw fa-device"
                style={{ fontSize: '1.75em' }}
              />
            </NavIcon>
            <NavText>Devices</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </>
  );
}

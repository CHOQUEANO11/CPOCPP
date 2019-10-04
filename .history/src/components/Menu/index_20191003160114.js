import React, { useState } from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import { Icon, IconCPO, IconCPP, Wrapper } from './styles';
import Home from '../../pages/Home';
import Header from '../Header';

export default function Menu() {
  const [expanded, setExpanded] = useState(false);

  function onToggle() {
    setExpanded(!expanded);
  }
  return (
    <Wrapper>
      <div
        style={{
          marginLeft: expanded ? 240 : 64
        }}
      >
        <Header />
        <Home />
        <SideNav
          className="SideNav"
          onToggle={onToggle}
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
                <NavText>CPP</NavText>
              </NavItem>
            </NavItem>
            <NavItem eventKey="cpp">
              <NavIcon>
                <IconCPP size={20} />
              </NavIcon>
              <NavText>Home</NavText>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
      </div>
    </Wrapper>
  );
}

import React, { useState } from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import { Icon, IconCPO, IconCPP } from './styles';
import Home from '../../pages/Home';
import Header from '../Header';
import Compete from '../../pages/Compete';

export default function Menu() {
  const [expanded, setExpanded] = useState(false);
  const [Component, setComponent] = useState(<Home />);

  function onToggle() {
    setExpanded(!expanded);
  }

  function selected(e) {
    setComponent(e);
  }

  return (
    <div
      style={{
        marginLeft: expanded ? 240 : 64
      }}
    >
      <Header />
      {<Component />}
      <SideNav className="SideNav" onToggle={onToggle} onSelect={selected}>
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
            <NavItem eventKey="Compete">
              <NavText>Inserir Limite de Vaga</NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
              <NavText>Formulários</NavText>
            </NavItem>
          </NavItem>
          <NavItem eventKey="cpp">
            <NavIcon>
              <IconCPP size={20} />
            </NavIcon>
            <NavText>CPP</NavText>
            <NavItem eventKey="charts/linechart">
              <NavText>Inserir Limite de Vaga</NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
              <NavText>Formulários</NavText>
            </NavItem>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </div>
  );
}

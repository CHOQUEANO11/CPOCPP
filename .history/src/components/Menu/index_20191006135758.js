import React, { useState } from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import './styles.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import { Icon, IconCPO, IconCPP, IconPlus } from './styles';
import Home from '../../pages/Home';
import Header from '../Header';
import Compete from '../../pages/Compete';
import history from '../../services/history';

export default function Menu({ children }) {
  const [expanded, setExpanded] = useState(false);

  function onToggle() {
    setExpanded(!expanded);
  }

  function selected(e) {
    history.push(`/${e}`);
  }

  return (
    <div
      style={{
        marginLeft: expanded ? 240 : 64,
        flex: 1
      }}
    >
      <Header />

      <div className="scroll">{children}</div>

      <SideNav className="SideNav" onToggle={onToggle} onSelect={selected}>
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected={<Home />}>
          <NavItem eventKey="home">
            <NavIcon>
              <Icon size={20} />
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>
          <NavItem eventKey="compete">
            <NavIcon>
              <IconPlus size={20} />
            </NavIcon>
            <NavText>Cadastrar quadro</NavText>
          </NavItem>
          <NavItem eventKey="cpo">
            <NavIcon>
              <IconCPO size={20} />
            </NavIcon>
            <NavText>CPO</NavText>
            <NavItem eventKey={<Compete />}>
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

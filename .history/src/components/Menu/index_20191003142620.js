import React from 'react';
import { SideNav, Nav } from 'react-sidenav';
// import { Container } from './styles';

export default function Menu() {
  return (
    <div id="wrapper">
      <ul className="sidebar navbar-nav ">
        <p />
        <li className="nav-item active">
          <a>
            <i className="fas fa-fw fa-tachometer-alt" />
            <span> Dashboard</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link">
            <i className="fas fa-fw fa-file-alt" />
            <span> Novo Processo</span>
          </a>
        </li>
        <li className="nav-item">
          <a>
            <i className="fas fa-fw fa-chart-area" />
            <span> Documentos</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="tables.html">
            <i className="fas fa-fw fa-table" />
            <span> Relatórios</span>
          </a>
        </li>
      </ul>
      <div id="content-wrapper">
        <div className="container-fluid" />
      </div>
    </div>
  );
}

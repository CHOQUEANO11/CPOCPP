import React from 'react';
import { SideNav, Nav } from 'react-sidenav';
// import { Container } from './styles';

export default function Menu() {
  return (
    <div id="wrapper">
      <ul className={`sidebar navbar-nav ${this.state.menu}`}>
        <p />
        <li className="nav-item active">
          <a
            className="nav-link"
            onClick={() => this.setState({ nomePage: <Dashboard /> })}
          >
            <i className="fas fa-fw fa-tachometer-alt" />
            <span> Dashboard</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            onClick={() =>
              this.setState({ nomePage: <Processo {...this.props} /> })
            }
          >
            <i className="fas fa-fw fa-file-alt" />
            <span> Novo Processo</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            onClick={() => this.setState({ nomePage: <Documentos /> })}
          >
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
        <div className="container-fluid">{this.state.nomePage}</div>
      </div>
    </div>
  );
}

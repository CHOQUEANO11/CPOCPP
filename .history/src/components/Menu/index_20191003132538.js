import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

// import { Container } from './styles';

export default function Menu() {
  return (
    <>
      <div id="mySidenav" className="sidenav">
        <a href="javascript:void(0)" className="closebtn" onClick="closeNav()">
          &times;
        </a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>

      <h2>Animated Sidenav Example</h2>
      <p>Click on the element below to open the side navigation menu.</p>
      <span style="font-size:30px;cursor:pointer" onClick="openNav()">
        &#9776; open
      </span>
    </>
  );
}

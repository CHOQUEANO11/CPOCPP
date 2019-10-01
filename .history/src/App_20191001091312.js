import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Router>
      <Routes />
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </Router>
  );
}

export default App;

import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/oi" exact component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
}

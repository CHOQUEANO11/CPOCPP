import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Home from '../pages/Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/home" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

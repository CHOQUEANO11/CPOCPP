import React from 'react';
import { Switch, Router } from 'react-router-dom';

import SignIn from '../pages/SignIn';

export default function Routes() {
  return (
    <Switch>
      <Router path="/" exact component={SignIn} />
    </Switch>
  );
}

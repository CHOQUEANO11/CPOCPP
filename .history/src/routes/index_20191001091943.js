import React from 'react';
import { Switch, Router } from 'react-router-dom';

import SignIn from '../pages/SignIn';
// import SignUp from '../pages/SignUp';

// import Dashboard from '../pages/Dashboard';
// import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Router path="/" exact component={SignIn} />
    </Switch>
  );
}

import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Home from '../pages/Home';
import Compete from '../pages/Compete';
import Cpo from '../pages/CPO';
import Cpp from '../pages/CPP';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/home" component={Home} isPrivate />
      <Route path="/compete" component={Compete} isPrivate />
      <Route path="/cpo" component={Cpo} isPrivate />
      <Route path="/cpp" component={Cpp} isPrivate />
    </Switch>
  );
}

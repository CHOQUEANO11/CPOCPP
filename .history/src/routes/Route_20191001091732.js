import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import AuthLayout from '../pages/SignIn';
// import DefaultLayout from '~/pages/_layouts/default';

// import { store } from '~/store';

export default function RouteWrapper() {
  const Layout = AuthLayout;

  return (
    <Route>
      <Layout />
    </Route>
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
};

RouteWrapper.defaultProps = {
  isPrivate: false
};

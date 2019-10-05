import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../../components/Header';
import Menu from '../../../components/Menu';

import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
      <Menu>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired
};
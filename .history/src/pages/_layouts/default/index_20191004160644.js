import React, { Children } from 'react';
// import PropTypes from 'prop-types';

// import Header from '../../../components/Header';
import Menu from '../../../components/Menu';

import { Wrapper } from './styles';

export default function DefaultLayout({ children: Children }) {
  return (
    <Wrapper>
      <Menu>
        <Children />
      </Menu>
    </Wrapper>
  );
}

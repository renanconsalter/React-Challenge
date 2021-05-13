import React from 'react';

import * as styled from './index.style';

import headerLogo from '../../assets/icons/header_logo.svg';

const Header = () => (
  <styled.Header>
    <img src={headerLogo} alt="Logo HostGator" />
  </styled.Header>
);

export default Header;

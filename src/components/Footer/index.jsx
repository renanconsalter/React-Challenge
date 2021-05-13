import React from 'react';

import * as styled from './index.style';

const Footer = () => (
  <styled.FooterContainer>
    <styled.FooterText onClick={() => window.open('https://www.hostgator.com.br/hospedagem-de-sites')}>
      *Confira as condições de promoção
    </styled.FooterText>
  </styled.FooterContainer>
);

export default Footer;

import React from 'react';

import { usePlansContext } from '../../context/app.context';

import * as styled from './index.style';

import iconCheck from '../../assets/icons/check_icon.svg';
import leftImage from '../../assets/images/left_image_banner.svg';
import rightImage from '../../assets/images/right_image_banner.svg';
import arrowButtonIcon from '../../assets/icons/arrow_down_button.svg';

const Banner = () => {
  const { periodSelectorRef } = usePlansContext();

  const benefits = [
    { key: 1, label: '99,9% de disponibilidade: seu site sempre no ar' },
    { key: 2, label: 'Suporte 24h, todos os dias' },
    { key: 3, label: 'Painel de Controle cPanel' },
  ];

  return (
    <styled.BannerContainer>
      <styled.LeftImage src={leftImage} alt="Mesa de escritório" />
      <styled.TextContainer>
        <styled.Title>
          <styled.HostingText>Hospedagem de Sites</styled.HostingText>
          Tenha uma hospedagem de sites estável e evite perder visitantes
          diariamente
        </styled.Title>
        <styled.BenefitsContainer>
          {benefits.map((benefit) => (
            <styled.Description key={benefit.key}>
              <styled.Icon src={iconCheck} alt="" />
              {benefit.label}
            </styled.Description>
          ))}
        </styled.BenefitsContainer>
      </styled.TextContainer>
      <styled.RightImage src={rightImage} alt="Homem sinalizando positivo e mesa de escritório com café" />
      <styled.ArrowButton src={arrowButtonIcon} alt="" onClick={() => window.scrollTo({ behavior: 'smooth', top: periodSelectorRef.current.offsetTop })} />
    </styled.BannerContainer>
  );
};

export default Banner;

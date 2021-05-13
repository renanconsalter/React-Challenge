import React, { useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { usePlansContext } from '../../context/app.context';

import planPIcon from '../../assets/images/plan_p.svg';
import planMIcon from '../../assets/images/plan_m.svg';
import planTurboIcon from '../../assets/images/plan_turbo.svg';
import infoIcon from '../../assets/icons/info_icon.svg';

import { Button } from '..';

import * as styled from './index.style';

import { colorPalette } from '../../styles/theme';

const PlanCard = ({ plan }) => {
  const { period } = usePlansContext();

  const planValue = useMemo(() => {
    const { priceOrder, months } = plan.cycle[period];
    const valueWithDiscount = (priceOrder - priceOrder * 0.4).toFixed(2);

    const getBRLFormattedValue = (amount) => Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);

    return {
      value: getBRLFormattedValue(priceOrder),
      valueWithDiscount: getBRLFormattedValue(valueWithDiscount),
      monthlyValue: getBRLFormattedValue(
        (valueWithDiscount / months).toFixed(2),
      ),
      discountValue: getBRLFormattedValue((priceOrder * 0.4).toFixed(2)),
    };
  }, [period, plan]);

  const getIconByPlanName = useCallback((name) => {
    switch (name) {
      case 'Plano P':
        return <img src={planPIcon} alt="Plano P" />;
      case 'Plano M':
        return <img src={planMIcon} alt="Plano M" />;
      case 'Plano Turbo':
        return <img src={planTurboIcon} alt="Plano Turbo" />;
      default:
        return <></>;
    }
  }, []);

  return (
    <styled.Container>
      <styled.Card
        featured={
          plan.name === 'Plano M'
            ? `border-top: 8px solid ${colorPalette.orange};
               border-bottom: 4px solid ${colorPalette.orange};`
            : ''
        }
      >
        <styled.CardHeader>
          <styled.IconContainer>
            {getIconByPlanName(plan.name)}
          </styled.IconContainer>
          <styled.PlanNameText>{plan.name}</styled.PlanNameText>
        </styled.CardHeader>

        <styled.Divider />

        <styled.CardContent>
          <styled.OriginalPrice>{planValue.value}</styled.OriginalPrice>
          &nbsp;
          <styled.DiscountPrice>
            {planValue.valueWithDiscount}
          </styled.DiscountPrice>
          <styled.EqualyAsText>equivalente a</styled.EqualyAsText>
          <styled.MainPrice>
            R$
            <styled.MainPriceValue>
              {String(planValue.monthlyValue).replace('R$', '')}
            </styled.MainPriceValue>
            /mês*
          </styled.MainPrice>
          <Link
            to={`/?a=add&pid=${plan.id}&billingcycle=${period}&promocode=PROMOHG40`}
          >
            <Button
              color={
                plan.name === 'Plano M'
                  ? colorPalette.orange
                  : colorPalette.softBlue
              }
            >
              Contrate Agora
            </Button>
          </Link>
          <styled.OneYearDomainFree>
            1 ano de Domínio Grátis
            <styled.InfoIcon src={infoIcon} alt="" />
          </styled.OneYearDomainFree>
          <styled.DiscountContainer>
            <styled.DiscountText>
              {`economize ${planValue.discountValue}`}
            </styled.DiscountText>
            <styled.DiscountChip>40% OFF</styled.DiscountChip>
          </styled.DiscountContainer>
        </styled.CardContent>

        <styled.Divider />

        <styled.CardFooter>
          <styled.FeatureText>
            <span>
              {plan.name === 'Plano P' ? 'Para 1 site' : 'Sites ilimitados'}
            </span>
          </styled.FeatureText>
          <styled.FeatureText>
            <span>
              <b>{`${plan.name === 'Plano Turbo' ? '150' : '100'} GB`}</b>
              &nbsp;de Armazenamento
            </span>
          </styled.FeatureText>
          <styled.FeatureText>
            <span>
              Contas de E-mail&nbsp;
              <b>Ilimitadas</b>
            </span>
          </styled.FeatureText>
          <styled.FeatureText>
            <span>Criador de Sites </span>
            <styled.FreeFeatureText>Grátis</styled.FreeFeatureText>
          </styled.FeatureText>
          <styled.FeatureText>
            <span>Certificado SSL </span>
            <b>Grátis</b>
            <span> (https)</span>
          </styled.FeatureText>
        </styled.CardFooter>
      </styled.Card>
    </styled.Container>
  );
};

export default PlanCard;

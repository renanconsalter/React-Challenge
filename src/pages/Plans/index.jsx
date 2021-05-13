import React from 'react';

import { usePlansContext } from '../../context/app.context';
import { useWindowSize } from '../../hooks/useWindowSize';

import { Carousel, PlanCard, PlansContainer } from '../../components';

import * as styled from './index.style';

const Plans = () => {
  const { plans } = usePlansContext();
  const { width } = useWindowSize();

  const showCarousel = width < 1024;

  return (
    <styled.ContentContainer>
      {showCarousel ? (
        <Carousel>
          {plans.map((plan) => <PlanCard key={plan.id} plan={plan} />)}
        </Carousel>
      )
        : (
          <PlansContainer>
            {plans.map((plan) => <PlanCard key={plan.id} plan={plan} />)}
          </PlansContainer>
        )}
    </styled.ContentContainer>
  );
};

export default Plans;

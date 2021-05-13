import React from 'react';
import { Radio } from '@material-ui/core';
import { usePlansContext } from '../../context/app.context';

import * as styled from './index.style';

const PeriodSelectorRadio = () => {
  const {
    period, setPeriod, periodSelectorRef,
  } = usePlansContext();

  const radioOptions = ([
    { value: 'triennially', label: '3 anos' },
    { value: 'annually', label: '1 ano' },
    { value: 'monthly', label: '1 mês' },
  ]);

  return (
    <styled.Container ref={periodSelectorRef}>
      <styled.Title>Quero pagar a cada:</styled.Title>
      <styled.Radio
        name="radio"
        value={period}
        onChange={(e) => setPeriod(e.target.value)}
      >
        {radioOptions.map((option) => (
          <styled.RadioOptions
            key={`id_${option.value}`}
            value={option.value}
            label={option.label}
            active={period === option.value}
            control={<Radio />}
          />
        ))}
      </styled.Radio>
    </styled.Container>
  );
};

export default PeriodSelectorRadio;

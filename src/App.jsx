import React from 'react';

import { useDispatch } from 'react-redux';
import { SET_PLANS } from './redux/plans/actions';

import Routers from './routes';
import api from './services/api';

import CSSBaseline from './styles';

const App = () => {
  const dispatch = useDispatch();
  let plans = [];

  api.get('prices').then((response) => {
    const data = response.data.shared;
    const { products } = data;

    Object.values(products).forEach((plan) => {
      plans.push(plan);
    });

    plans = plans.filter((plan) => plan.name === 'Plano P' || plan.name === 'Plano M' || plan.name === 'Plano Turbo');

    dispatch({ type: SET_PLANS, payload: { plans } });
  });

  return (
    <>
      <CSSBaseline />
      <Routers />
    </>
  );
};

export default App;

import React, { createContext } from 'react';
import { useSelector } from 'react-redux';

const PlansContext = createContext();

const ContextProvider = (props) => {
  const { children } = props;

  const [period, setPeriod] = React.useState('triennially');

  const periodSelectorRef = React.useRef(null);

  const { plans } = useSelector((state) => state.plansReducer);

  const contextData = {
    period,
    setPeriod,
    periodSelectorRef,
    plans,
  };

  return <PlansContext.Provider value={contextData}>{children}</PlansContext.Provider>;
};

const usePlansContext = () => React.useContext(PlansContext);

export { ContextProvider, usePlansContext };

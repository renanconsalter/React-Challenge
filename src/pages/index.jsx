import React from 'react';
import AppProvider from '../context';

import {
  Header, Banner, PeriodSelector, Footer,
} from '../components';

import Plans from './Plans';

const Index = () => (
  <AppProvider>
    <>
      <Header />
      <Banner />
      <PeriodSelector />
      <Plans />
      <Footer />
    </>
  </AppProvider>
);

export default Index;

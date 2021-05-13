import React from 'react';
import { ContextProvider } from './app.context';

const AppProvider = ({ children }) => (
  <ContextProvider>{children}</ContextProvider>
);

export default AppProvider;

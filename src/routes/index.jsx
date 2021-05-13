import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Index from '../pages';

const Routers = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Index} />
    </Switch>
  </BrowserRouter>
);

export default Routers;

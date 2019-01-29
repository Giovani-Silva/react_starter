import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Start from '../components/Start';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Start} />
  </Switch>
);

export default Routes;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Details from './pages/details';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/details/:id" component={Details} />
  </Switch>
);

export default Routes;

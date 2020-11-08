import React from 'react';
import { Switch, Route } from 'react-router-dom';

import EventsMap from '../pages/EventsMap';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={EventsMap} />
  </Switch>
);

export default Routes;

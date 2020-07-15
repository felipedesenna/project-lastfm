import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Albums from '../pages/Albums';
import Artist from '../pages/Artist';
import HistorySearches from '../pages/HistorySearches';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/albums" component={Albums} />
    <Route path="/artist" component={Artist} />

    <Route path="/historysearches" component={HistorySearches} isPrivate />
  </Switch>
);

export default Routes;

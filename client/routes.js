import React from 'react';
import { Route, Link } from 'react-router';

import MainLayout from './components/layouts/mainLayout';
import HomePage from './components/pages/home';
import InfoPage from './components/pages/info';
import CreditsPage from './components/pages/credits';


export default (
  <Route>
    <Route component={MainLayout}>
      <Route path="/" component={HomePage}/>
      <Route path="/info" component={InfoPage}/>
      <Route path="/credits" component={CreditsPage}/>
    </Route>
  </Route>
);

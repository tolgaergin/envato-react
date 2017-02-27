import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { isLoggedIn } from './auth';

import App from './containers/App';
import Summary from './containers/Summary';
import Settings from './containers/Settings';
import Sales from './containers/Sales';
import Templates from './containers/Templates';

import Login from './containers/Login';

function checkAuth(nextState, replace) {

  if (!isLoggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
}

export default (
  <Route>
    <Route path="/" component={App} onEnter={checkAuth}>
      <IndexRoute component={Summary} />
      <Route path="/settings" component={Settings} />
      <Route path="/sales" component={Sales} />
      <Route path="/templates" component={Templates} />
    </Route>
    <Route path="/login" component={Login} />
  </Route>
);

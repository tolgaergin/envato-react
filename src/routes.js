import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Summary from './containers/Summary';
import Settings from './containers/Settings';
import Sales from './containers/Sales';
import Templates from './containers/Templates';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Summary}/>
    <Route path="/settings" component={Settings}/>
    <Route path="/sales" component={Sales}/>
    <Route path="/templates" component={Templates}/>
  </Route>
);

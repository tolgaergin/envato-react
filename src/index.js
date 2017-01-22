import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Summary from './components/Summary/Summary';
import Settings from './components/Settings/Settings';
import Sales from './components/Sales/Sales';
import Templates from './components/Templates/Templates';

import './index.css';

// import NotFound from './components/NotFound';

const Root = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Summary}/>
      <Route path="/settings" component={Settings}/>
      <Route path="/sales" component={Sales}/>
      <Route path="/templates" component={Templates}/>
    </Route>
  </Router>
);

render(
  <Root />,
  document.getElementById('root')
);

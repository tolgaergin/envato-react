import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/App';
import Summary from './components/Summary/Summary';
import Settings from './components/Settings/Settings';
import Sales from './components/Sales/Sales';
import Templates from './components/Templates/Templates';

import './index.css';

// import NotFound from './components/NotFound';

import store, { history } from './store/index';

const Root = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Summary}/>
        <Route path="/settings" component={Settings}/>
        <Route path="/sales" component={Sales}/>
        <Route path="/templates" component={Templates}/>
      </Route>
    </Router>
  </Provider>
);

render(
  <Root />,
  document.getElementById('root')
);

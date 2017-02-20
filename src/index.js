import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Summary from './containers/Summary';
import Settings from './containers/Settings';
import Sales from './containers/Sales';
import Templates from './containers/Templates';

import { injectGlobal } from 'styled-components';

injectGlobal `
  body {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
`;
import './index.css';

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

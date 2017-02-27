import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import store, { history } from './store/index';

import { Router } from 'react-router';
import routes from './routes';

import './assets/global.css';

render(
  <Provider store={store}>
    <Router history={history}>
      { routes }
    </Router>
  </Provider>,
  document.getElementById('root')
);

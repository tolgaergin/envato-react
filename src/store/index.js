import { createStore, compose, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const middleWare = applyMiddleware(thunk);

const store = createStore(reducers, enhancers, middleWare);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;

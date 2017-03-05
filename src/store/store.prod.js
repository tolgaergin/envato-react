import { createStore, compose, applyMiddleware } from 'redux';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

// for deploying
// import { createHistory, useBasename } from 'history';
// let browserHistory = useBasename(createHistory)({
//   basename: '/testing/envado',
// });
// export const history = syncHistoryWithStore(browserHistory, store);

// it passes extra argument to actions
// api = 'http://example.com/api'
const api = '';

const enhancers = compose(
  applyMiddleware(thunk.withExtraArgument(api))
);

const store = createStore(reducers, enhancers);

export const history = syncHistoryWithStore(hashHistory, store);

export default store;

import { createStore, compose, applyMiddleware } from 'redux';
import { persistState } from 'redux-devtools';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

// for deploying
// import { createHistory, useBasename } from 'history';
// let browserHistory = useBasename(createHistory)({
//   basename: '/testing/envado',
// });
// export const history = syncHistoryWithStore(browserHistory, store);

const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/
    )
  )
);

const store = createStore(reducers, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;

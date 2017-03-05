if (process.env.NODE_ENV === 'production') {
  module.exports = require('./store.prod');
} else {
  module.exports = require('./store.dev');
}

// import { createStore, compose, applyMiddleware } from 'redux';
// import { browserHistory, hashHistory } from 'react-router';
// import { syncHistoryWithStore } from 'react-router-redux';
// import thunk from 'redux-thunk';
// import reducers from './reducers';
//
// // if (process.env.NODE_ENV === 'development') {
// //   console.log('Development');
// // } else if (process.env.NODE_ENV === 'production') {
// //   console.log('Production');
// // }
//
// // for deploying
// // import { createHistory, useBasename } from 'history';
// // let browserHistory = useBasename(createHistory)({
// //   basename: '/testing/envado',
// // });
// // export const history = syncHistoryWithStore(browserHistory, store);
//
// const enhancers = compose(
//   window.devToolsExtension ? window.devToolsExtension() : f => f
// );
//
// // it passes extra argument to actions
// // api = 'http://example.com/api'
// const api = '';
//
// const middleWare = applyMiddleware(thunk.withExtraArgument(api));
//
// const store = createStore(reducers, enhancers, middleWare);
//
// export const history = syncHistoryWithStore(browserHistory, store);
//
// export default store;

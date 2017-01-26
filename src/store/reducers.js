import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import templates from './Templates/reducers';
import sales from './Sales/reducers';
import summary from './Summary/reducers';
import settings from './Settings/reducers';

const reducers = combineReducers({
  templates,
  sales,
  summary,
  settings,
  routing: routerReducer,
});

export default reducers;

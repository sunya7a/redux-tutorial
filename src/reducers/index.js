import { combineReducers } from 'redux';

import todos from './todos';
import counter from './counter';

const app = combineReducers({
  todos,
  counter,
});

export default app;

import { combineReducers } from 'redux';

import todos, * as fromTodos from './todos';
import counter from './counter';

const app = combineReducers({
  todos,
  counter,
});

export default app;

export const getIsFetching = (
  state,
  filter,
) => (
  fromTodos.getIsFetching(
    state.todos,
    filter,
  )
);

export const getVisibleTodos = (
  state,
  filter,
) => (
  fromTodos.getVisibleTodos(
    state.todos,
    filter,
  )
);

export const getCounterValue = state => state.counter;

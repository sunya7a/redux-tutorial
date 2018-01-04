import { createStore, combineReducers, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { createLogger } from 'redux-logger';

import counter from '../components/counter/counter';
import todos, * as fromTodos from '../components/todo/todos';

const configureStore = () => {
  const root = combineReducers({
    counter,
    todos
  });

  const middlewares = [promise];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(
    root,
    applyMiddleware(...middlewares)
  );
};

export default configureStore;

export const getVisibleTodos = (
  state,
  filter
) => (
  fromTodos.getVisibleTodos(
    state.todos,
    filter
  )
);

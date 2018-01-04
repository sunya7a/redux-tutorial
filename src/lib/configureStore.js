import { createStore, combineReducers } from 'redux';

import counter from '../components/counter/counter';
import todos, * as fromTodos from '../components/todo/todos';

const logger = (store) => (next) => {
  if (!console.group) {
    return next;
  }
  return (action) => {
    console.group(action.type);
    console.log('%c prev state', 'color: gray', store.getState());
    console.log('%c action', 'color: blue', action);
    const returnValue = next(action);
    console.log('%c next state', 'color: green', store.getState());
    console.groupEnd(action.type);
    return returnValue;
  };
};

const promise = (store) => (next) => (action) => {
  if (typeof action.then === 'function') {
    return action.then(next);
  }
  return next(action);
};

const wrapDispatchWithMiddlewares = (store, middlewares) => {
  middlewares.slice().reverse().forEach(middleware =>
    store.dispatch = middleware(store)(store.dispatch)
  );
};

const configureStore = () => {
  const root = combineReducers({
    counter,
    todos
  });
  const store = createStore(root)
  const middlewares = [promise];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
  }

  wrapDispatchWithMiddlewares(store, middlewares);

  return store
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

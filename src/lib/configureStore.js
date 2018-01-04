import { createStore, combineReducers } from 'redux';

import counter from '../components/counter/counter';
import todos, * as fromTodos from '../components/todo/todos';

const addLoggingToDispatch = (store) => {
  const rawDispatch = store.dispatch;
  if (!console.group) {
    return rawDispatch;
  }
  return (action) => {
    console.group(action.type);
    console.log('%c prev state', 'color: gray', store.getState());
    console.log('%c action', 'color: blue', action);
    const returnValue = rawDispatch(action);
    console.log('%c next state', 'color: green', store.getState());
    console.groupEnd(action.type);
    return returnValue;
  };
};

const configureStore = () => {
  const root = combineReducers({
    counter,
    todos
  });
  const store = createStore(root)

  if (process.env.NODE_ENV !== 'production') {
    store.dispatch = addLoggingToDispatch(store);
  }

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

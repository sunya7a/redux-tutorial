import { createStore, combineReducers } from 'redux';
import throttle from 'lodash/throttle';
import { loadState, saveState } from './localStorage';

import counter from '../components/counter/counter';
import todos from '../components/todo/todos';

const configureStore = () => {
  const root = combineReducers({
    counter,
    todos
  });
  const persistedState = loadState();
  const store = createStore(root, persistedState)

  store.subscribe(throttle(() => {
    saveState({
      todos: store.getState().todos
    });
  }, 1000));

  return store
};


export default configureStore;

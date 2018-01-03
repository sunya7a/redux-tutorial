import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import counter from './components/counter/counter';
import todos from './components/todo/todos';
import visibilityFilter from './components/todo/visibilityFilter';

import AddTodo from './components/todo/AddTodo';
import VisibleTodoList from './components/todo/VisibleTodoList';
import Footer from './components/todo/Footer';

import { loadState, saveState } from './lib/localStorage';
import throttle from 'lodash/throttle';

const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

const root = combineReducers({
  counter,
  todos,
  visibilityFilter
});

const persistedState = loadState();
const store = createStore(root, persistedState)

store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos
  });
}, 1000));

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

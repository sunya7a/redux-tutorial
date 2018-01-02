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

const persistedState = {
  todos: [
    {
      id: '0',
      text: 'Welcome back!',
      completed: true
    },
    {
      id: '1',
      text: 'Learn redux',
      completed: false
    }
  ]
};

ReactDOM.render(
  <Provider store={createStore(root, persistedState)}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

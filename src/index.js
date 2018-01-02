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

ReactDOM.render(
  <Provider store={createStore(root)}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

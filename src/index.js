import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from 'redux';

import counter from './components/counter/counter';
import todos from './components/todo/todos';
import visibilityFilter from './components/todo/visibilityFilter';

import AddTodo from './components/todo/AddTodo';
import VisibleTodoList from './components/todo/VisibleTodoList';
import Footer from './components/todo/Footer';

const root = combineReducers({
  counter,
  todos,
  visibilityFilter
});

const store = createStore(root);

const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
);
registerServiceWorker();

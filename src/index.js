import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import combineReducers from './lib/combineReducers';
import counter from './components/counter/counter';
import todos from './components/todo/todos';
import visibilityFilter from './components/visibilityFilter/visibilityFilter';

const root = combineReducers({
  counter,
  todos,
  visibilityFilter
});

const store = createStore(root);

let nextTodoId = 0;
class TodoApp extends Component {
  render() {
    return (
      <div>
        <input type='text' ref={node => {
          this.input = node;
        }} />
        <button onClick={() => {
          store.dispatch({
            type: 'ADD_TODO',
            text: this.input.value,
            id: nextTodoId++
          });
          this.input.value = '';
        }}>
          Add Todo
        </button>
        <ul>
          {this.props.todos.map(todo =>
            <li
              key={todo.id}
              onClick={() => {
                store.dispatch({
                  type: 'TOGGLE_TODO',
                  id: todo.id
                });
              }}
              style={{
                textDecoration:
                  todo.completed ?
                    'line-through' :
                    'none'
              }}
            >
              {todo.text}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

const render = () => {
  ReactDOM.render(
    <TodoApp
      todos={store.getState().todos}
    />,
    document.getElementById('root')
  );
}
registerServiceWorker();

store.subscribe(render);
render();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from 'redux';
import counter from './components/counter/counter';
import todos from './components/todo/todos';
import visibilityFilter from './components/visibilityFilter/visibilityFilter';
import { Provider } from 'react-redux';
//import CounterShow from './components/counter/CounterShow';

const root = combineReducers({
  counter,
  todos,
  visibilityFilter
});

//const root = (state = {}, action) => {
//  return {
//    counter: counter(
//      state.counter,
//      action
//    ),
//    todos: todos(
//      state.todos,
//      action
//    ),
//    visibilityFilter: visibilityFilter(
//      state.visibilityFilter,
//      action
//    )
//  };
//};

const store = createStore(root);
const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <div></div>
    </Provider>,
    document.getElementById('root')
  );
}
registerServiceWorker();

store.subscribe(render);
render();

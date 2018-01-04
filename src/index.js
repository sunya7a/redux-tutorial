import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Root from './components/todo/Root';
import configureStore from './lib/configureStore';
import { fetchTodos } from './api/index';

fetchTodos('all').then(todos => console.log(todos));

const store = configureStore();

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
registerServiceWorker();

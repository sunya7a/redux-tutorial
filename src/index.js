import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
//import createStore from './lib/createStore';
import counter from './components/counter/counter';
import { Provider } from 'react-redux';
import CounterShow from './components/counter/CounterShow';

const store = createStore(counter);
const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <CounterShow
        value={store.getState()}
        onIncrement={() => {
          store.dispatch({
            type: 'INCREMENT'
          })
        }}
        onDecrement={() => {
          store.dispatch({
            type: 'DECREMENT'
          })
        }}
      />
    </Provider>,
    document.getElementById('root')
  );
}
registerServiceWorker();

store.subscribe(render);
render();

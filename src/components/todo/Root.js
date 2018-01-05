import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TodoApp from './TodoApp';
import Counter from '../counter/Counter';

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/counter' component={Counter} />
        <Route path='/:filter?' component={TodoApp} />
      </Switch>
    </BrowserRouter>
  </Provider>
);
Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;

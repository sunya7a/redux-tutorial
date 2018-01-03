import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TodoApp from './TodoApp';

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={TodoApp} />
      </Switch>
    </BrowserRouter>
  </Provider>
);
Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;

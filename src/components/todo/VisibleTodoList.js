import React, { Component } from 'react';
import todos from './components/todo/todos';
import visibilityFilter from './components/todo/visibilityFilter';
import TodoList from './components/todo/TodoList';
import getVisibleTodos from '../../lib/getVisibleTodos';

class VisibleTodoList extends Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const props = this.props;
    const state = store.getState();

    return (
      <TodoList
        todos={
          getVisibleTodos(
            todos,
            visibilityFilter
          )
        }
        onTodoClick={id =>
          store.dispatch({
            type: 'TOGGLE_TODO',
            id
          })
        }
      />
    );
  }
}

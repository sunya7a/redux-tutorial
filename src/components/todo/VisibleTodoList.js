import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TodoList from './TodoList';
import { toggleTodo } from './actions';
import { getVisibleTodos } from '../../lib/configureStore';

const mapStateToProps = (
  state,
  { match: { params } }
) => ({
  todos: getVisibleTodos(
    state,
    params.filter || 'all'
  )
});

const VisibleTodoList = withRouter(
  connect(
    mapStateToProps,
    { onTodoClick: toggleTodo }
  )(TodoList)
);

export default VisibleTodoList;

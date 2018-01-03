import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TodoList from './TodoList';
import getVisibleTodos from '../../lib/getVisibleTodos';
import { toggleTodo } from './actions';

const mapStateToProps = (
  state,
  { match: { params } }
) => ({
  todos: getVisibleTodos(
    state.todos,
    params.filter || 'all'
  )
});

const mapDispatchToProps = (dispatch) => ({
  onTodoClick(id) {
    dispatch(toggleTodo(id))
  }
});

const VisibleTodoList = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoList)
);

export default VisibleTodoList;

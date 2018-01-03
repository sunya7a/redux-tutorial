const getVisibleTodos = (
  todos,
  filter
) => {
  switch (filter) {
    case 'all':
      return todos;
    case 'active':
      return todos.filter(
        t => !t.completed
      );
    case 'completed':
      return todos.filter(
        t => t.completed
      );
    default:
      return todos;
  }
};

export default getVisibleTodos;

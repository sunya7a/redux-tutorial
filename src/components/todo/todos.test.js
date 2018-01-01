import todos from './todos';

it('adds a todo', () => {
  const stateBefore = [];
  const stateAfter = [
    {
      id: 1,
      text: 'Learn redux',
      completed: false
    }
  ];
  const action = {
    type: 'ADD_TODO',
    id: 1,
    text: 'Learn redux'
  };

  Object.freeze(stateBefore);
  Object.freeze(action);

  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter);
});

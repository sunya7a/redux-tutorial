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

it('toggles completed for todo id', () => {
  const stateBefore = [
    {
      id: 1,
      text: 'Learn redux',
      completed: false
    },
    {
      id: 2,
      text: 'Buy milk',
      completed: false
    },
  ];
  const stateAfter = [
    {
      id: 1,
      text: 'Learn redux',
      completed: false
    },
    {
      id: 2,
      text: 'Buy milk',
      completed: true
    },
  ];
  const action = {
    type: 'TOGGLE_TODO',
    id: 2
  };

  Object.freeze(stateBefore);
  Object.freeze(action);

  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter);
});

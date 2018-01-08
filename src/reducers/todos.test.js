import todos from './todos';

it('is known', () => {
  expect(true).toBe(true);
});

/*
it('adds a todo', () => {
  const stateBefore = {};
  const stateAfter = {
    allIds: [1],
    byId: {
      1: {
        id: 1,
        text: 'Learn redux',
        completed: false
      }
    }
  };
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
  const stateBefore = {
    allIds: [1, 2],
    byId: {
      1: {
        id: 1,
        text: 'Learn redux',
        completed: false
      },
      2: {
        id: 2,
        text: 'Let\'s go',
        completed: false
      }
    }
  };
  const stateAfter = {
    allIds: [1, 2],
    byId: {
      1: {
        id: 1,
        text: 'Learn redux',
        completed: false
      },
      2: {
        id: 2,
        text: 'Let\'s go',
        completed: true
      }
    }
  };
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
*/

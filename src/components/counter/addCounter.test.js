import addCounter from './addCounter';

it('adds a counter to the list of counters', () => {
  const listBefore = [];
  const listAfter = [0];

  Object.freeze(listBefore);

  expect(
    addCounter(listBefore)
  ).toEqual(listAfter);
});

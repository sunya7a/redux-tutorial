import incrementCounter from './incrementCounter';

it('increments at index', () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 11, 20];

  Object.freeze(listBefore);

  expect(
    incrementCounter(listBefore, 1)
  ).toEqual(listAfter);
});

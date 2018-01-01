import removeCounter from './removeCounter';

it('removes counter at index', () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 20];

  Object.freeze(listBefore);

  expect(
    removeCounter(listBefore, 1)
  ).toEqual(listAfter);
});

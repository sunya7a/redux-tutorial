import counter from './counter';

it('increments', () => {
  expect(
    counter(0, { type: 'INCREMENT' })
  ).toEqual(1);
});

it('increments', () => {
  expect(
    counter(1, { type: 'INCREMENT' })
  ).toEqual(2);
});

it('decrements', () => {
  expect(
    counter(1, { type: 'DECREMENT' })
  ).toEqual(0);
});

it('decrements', () => {
  expect(
    counter(0, { type: 'DECREMENT' })
  ).toEqual(-1);
});

it('returns same state on unknown action.type', () => {
  expect(
    counter(1, { type: 'NOT_AN_ACTION' })
  ).toEqual(1);
});

it('returns default state when no state is passed', () => {
  expect(
    counter(undefined, {})
  ).toEqual(0);
});

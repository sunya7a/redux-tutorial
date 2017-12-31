import createStore from './createStore';
import counter from '../components/counter/counter';

const store = createStore(counter);

it('gets state', () => {
  expect(
    store.getState()
  ).toEqual(0);
});

it('responds to dispatch', () => {
  store.dispatch({ type: 'INCREMENT' })

  expect(
    store.getState()
  ).toEqual(1);
});

it('responds to subscribe', () => {
  store.subscribe(() => {});
});

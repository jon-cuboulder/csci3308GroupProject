import reducer from './form';
import * as actions from '../actions/forms';

it('should include a loading state for each registered form', () => {
  const state = reducer(undefined, {});
  let contains = true;
  Object.keys(state)
    .filter(field => field !== 'toggles')
    .forEach( form => {
      contains = (typeof state[form]._loading === "boolean") && contains;
    });

  expect(contains).toBe(true);
});

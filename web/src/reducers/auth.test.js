import reducer from './auth';
import * as actions from '../actions/auth';

it('must update state on success', () => {
  const state = reducer(null, actions.success(123, 'foo@bar'));
  expect(state.token).toBe(123);
});

it('must clear auth state on clear', () => {
  const state = reducer({'token': 123}, actions.clear());
  expect(state).toBe(null);
});

it('should initialize as null', () => {
  expect(reducer(undefined, {})).toBe(null);
});

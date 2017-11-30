import reducer from './search';
import * as actions from '../actions/search';

it('should reset search on clear', function() {
  const state = reducer({qry: 'abc'}, actions.clear());
  expect(state.qry).toBe('');
});

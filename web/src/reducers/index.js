import { combineReducers } from 'redux';

import searchReducer from './search';
import registerReducer from './register';

/* This reducer wraps all other root level reducers */
export default combineReducers({
  search: searchReducer,
  register: registerReducer
});

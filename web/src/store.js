import { createStore, combineReducers } from 'redux';

import searchReducer from './reducers/search';
import authReducer from './reducers/auth';
import signinReducer from './reducers/signin';
import registerReducer from './reducers/register';

export default function newStore() {
  return createStore(combineReducers({
    search: searchReducer,
    register: registerReducer,
    signin: signinReducer,
    auth: authReducer
  }));
}

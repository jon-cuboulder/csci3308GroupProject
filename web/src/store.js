import { createStore, combineReducers } from 'redux';

import searchReducer from './reducers/search';
import authReducer from './reducers/auth';
import formReducer from './reducers/form';
import topicsReducer from './reducers/topics';
import usersReducer from './reducers/users';

export default function newStore() {
  return createStore(combineReducers({
    search: searchReducer,
    auth: authReducer,
    form: formReducer,
    topics: topicsReducer,
    users: usersReducer
  }));
}

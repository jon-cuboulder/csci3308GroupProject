import { combineReducers } from 'redux';
import { USER_LOAD } from '../actions/users';

function byIdReducer(state={}, action) {
  switch (action.type) {
    case USER_LOAD:
      return Object.assign({}, state, { [action.payload.id]: action.payload });
    default:
      return state;
  }
}

export default combineReducers({ byId: byIdReducer });

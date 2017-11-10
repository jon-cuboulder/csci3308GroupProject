import { combineReducers } from 'redux';
import { SIGNIN_CHANGE } from '../actions/signin';

const initialState = {
  email: '',
  pass: ''
};

/* reducer for the form for creating a user */
function formReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNIN_CHANGE:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

export default combineReducers({ form: formReducer });

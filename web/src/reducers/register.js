import { combineReducers } from 'redux';
import { REGISTER_CHANGE, REGISTER_SUBMIT } from '../actions/register';

const initialState = {
  name: '',
  email: '',
  pass: '',
  pass2: ''
};

/* reducer for the form for creating a user */
function formReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_CHANGE:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

export default combineReducers({ form: formReducer });

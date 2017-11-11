import { SIGNIN_SUCCESS } from '../actions/signin';

/* reducer for the form for creating a user */
function authReducer(state = null, action) {
  switch (action.type) {
    case SIGNIN_SUCCESS:
      return Object.assign({}, action.payload);
    default:
      return state;
  }
}

export default authReducer;

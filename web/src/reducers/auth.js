import { AUTH_SUCCESS } from '../actions/auth';

export default function authReducer(state = null, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return Object.assign({}, action.payload);
    default:
      return state;
  }
}

import { AUTH_SUCCESS, AUTH_CLEAR } from '../actions/auth';

let initialState = null;
try {
  let auth = sessionStorage.getItem('auth');
  if (auth) {
    initialState = JSON.parse(auth);
  }
} catch(err) {
  console.error(err);
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      sessionStorage.setItem('auth', JSON.stringify(action.payload));
      return Object.assign({}, action.payload);
    case AUTH_CLEAR:
      sessionStorage.clear();
      return null;
    default:
      return state;
  }
}

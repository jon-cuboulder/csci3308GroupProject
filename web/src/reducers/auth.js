import { AUTH_SUCCESS, AUTH_CLEAR } from '../actions/auth';

function storageGet(key) {
  if(typeof sessionStorage === "undefined") {
    console.log('no sessionStorage');
    return null;
  }

  return sessionStorage.getItem(key);
}

function storageSet(key, value) {
  if(typeof sessionStorage === "undefined") {
    console.log('no sessionStorage');
    return null;
  }

  return sessionStorage.setItem(key, value);
}

let initialState = null;
try {
  let auth = storageGet('auth');
  if (auth) {
    initialState = JSON.parse(auth);
  }
} catch(err) {
  console.error(err);
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      storageSet('auth', JSON.stringify(action.payload));
      return Object.assign({}, action.payload);
    case AUTH_CLEAR:
      if(typeof sessionStorage !== "undefined") {
        sessionStorage.clear();
      }
      return null;
    default:
      return state;
  }
}

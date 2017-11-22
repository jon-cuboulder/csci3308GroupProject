/*
 * Action Types
 */
export const AUTH_CLEAR = 'AUTH_CLEAR';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';

/*
 * Action Creators
 */
export const clear = () => ({
  type: AUTH_CLEAR,
});

export const success = (token, email) => ({
  type: AUTH_SUCCESS,
  payload: { 
    token,
    email
  }
});

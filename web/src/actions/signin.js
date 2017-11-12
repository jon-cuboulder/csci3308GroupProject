/*
 * Action Types
 */
export const SIGNIN_SUBMIT = 'SIGNIN_SUBMIT';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';

/*
 * Action Creators
 */
export const submit = (email, password) => ({
  type: SIGNIN_SUBMIT,
  email,
  password
});

export const success = (user) => ({
  type: SIGNIN_SUCCESS,
  payload: { user }
});

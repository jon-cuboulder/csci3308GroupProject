/*
 * Action Types
 */
export const SIGNIN_SUBMIT = 'SIGNIN_SUBMIT';
export const SIGNIN_CHANGE = 'SIGNIN_CHANGE';

/*
 * Action Creators
 */
export const submit = (email, password) => ({
  type: SIGNIN_SUBMIT,
  email,
  password
});

export const formChange = (field, value) => ({
  type: SIGNIN_CHANGE,
  payload: {
    [field]: value
  }
});

/*
 * Action Types
 */
export const REGISTER_SUBMIT = 'REGISTER_SUBMIT';

/*
 * Action Creators
 */
export const submit = (name, email, password) => ({
  type: REGISTER_SUBMIT,
  name,
  email,
  password
});

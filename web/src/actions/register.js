/*
 * Action Types
 */
export const REGISTER_SUBMIT = 'REGISTER_SUBMIT';
export const REGISTER_CHANGE = 'REGISTER_CHANGE';

/*
 * Action Creators
 */
export const submit = (name, email, password) => ({
  type: REGISTER_SUBMIT,
  name,
  email,
  password
});

export const formChange = (field, value) => ({
  type: REGISTER_CHANGE,
  payload: {
    [field]: value
  }
});

/*
 * Action Types
 */
export const AUTH_SUCCESS = 'AUTH_SUCCESS';

/*
 * Action Creators
 */
export const success = (user) => ({
  type: AUTH_SUCCESS,
  payload: { user }
});

/*
 * Action Types
 */
export const USER_LOAD = 'USER_LOAD';

/*
 * Action Creators
 */
export function load(payload) {
  return {
    type: USER_LOAD,
    payload
  };
}

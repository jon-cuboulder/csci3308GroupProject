/*
 * Action Types
 */
export const SEARCH_CLEAR = 'SEARCH_CLEAR';
export const SEARCH_SUBMIT = 'SEARCH_SUBMIT';
export const SEARCH_RESULTS = 'SEARCH_RESULTS';

/*
 * Action Creators
 */
export const submit = (qry) => ({
  type: SEARCH_SUBMIT,
  qry: qry.trim()
});

export const results = (payload) => ({
  type: SEARCH_RESULTS,
  payload
});

export const clear = () => ({
  type: SEARCH_CLEAR
});
